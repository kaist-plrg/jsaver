package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.analyzer.exploded
import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Appender
import kr.ac.kaist.jsaver.util.Appender._
import kr.ac.kaist.jsaver.util.Useful._

// flat number domain
object FlatNum extends NumDomain {
  // name of top element
  val topName: String = "num"

  // total elemetns
  val totalOpt: Option[Iterable[Num]] = None

  // elements
  object Bot extends Elem
  object Top extends Elem
  case class Base(elem: Num) extends Elem

  // abstraction functions
  def apply(elems: Num*): Elem = this(elems)
  def apply(elems: Iterable[Num]): Elem = elems.size match {
    case 0 => Bot
    case 1 => Base(elems.head)
    case _ => Top
  }

  // appender
  implicit val app: App[Elem] = (app, elem) => elem match {
    case Bot => app >> "⊥"
    case Top => app >> topName
    case Base(v) => app >> v.toString
  }

  // get intervals
  def getInterval(from: Double, to: Double): Elem =
    if (from == to) Base(Num(from)) else Top

  // elements
  sealed trait Elem extends ElemTrait {
    // partial order
    def ⊑(that: Elem): Boolean = (this, that) match {
      case (Bot, _) | (_, Top) => true
      case (_, Bot) | (Top, _) => false
      case (Base(l), Base(r)) => l == r
    }

    // join operator
    def ⊔(that: Elem): Elem = (this, that) match {
      case (Bot, _) | (_, Top) => that
      case (_, Bot) | (Top, _) => this
      case (Base(l), Base(r)) => if (l == r) this else Top
    }

    // meet operator
    def ⊓(that: Elem): Elem = (this, that) match {
      case (Bot, _) | (_, Top) => this
      case (_, Bot) | (Top, _) => that
      case (Base(l), Base(r)) => if (l == r) this else Bot
    }

    // get single value
    def getSingle: Flat[Num] = this match {
      case Bot => FlatBot
      case Top => FlatTop
      case Base(elem) => FlatElem(elem)
    }

    // iterators
    final def iterator: Iterator[Num] = (this match {
      case Bot => Nil
      case Base(elem) => List(elem)
      case Top => totalOpt.getOrElse {
        exploded(s"impossible to concretize the top value of $topName.")
        Nil
      }
    }).iterator

    // contains check
    def contains(elem: Num): Boolean = this match {
      case Bot => false
      case Top => true
      case Base(x) => x == elem
    }

    def plus(that: Elem): Elem = aux(_ + _)(this, that)
    def plusInt(that: AbsInt): Elem = auxInt(_ + _)(this, that.getSingle)
    def mul(that: Elem): Elem = aux(_ * _)(this, that)
    def mulInt(that: AbsInt): Elem = auxInt(_ * _)(this, that.getSingle)
    private def aux(op: (Double, Double) => Double): (Elem, Elem) => Elem = {
      case (Bot, _) | (_, Bot) => Bot
      case (Base(Num(l)), Base(Num(r))) => Base(Num(op(l, r)))
      case _ => Top
    }
    private def auxInt(op: (Double, Long) => Double): (Elem, Flat[INum]) => Elem = {
      case (Bot, _) | (_, FlatBot) => Bot
      case (Base(Num(l)), FlatElem(INum(r))) => Base(Num(op(l, r)))
      case _ => Top
    }
  }
}
