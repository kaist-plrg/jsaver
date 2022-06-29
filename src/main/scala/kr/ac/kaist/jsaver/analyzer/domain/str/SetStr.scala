package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.analyzer.exploded
import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Appender
import kr.ac.kaist.jsaver.util.Appender._
import kr.ac.kaist.jsaver.util.Useful._

class SetStr(val max: Int) extends StrDomain {
  // name of top element
  protected val topName: String = "str"

  // max size of set
  protected val maxSizeOpt: Option[Int] = Some(max)

  // total elemetns
  protected val totalOpt: Option[Iterable[Str]] = None

  // elements
  lazy val Bot = Base(Set())
  object Top extends Elem
  case class Base(set: Set[Str]) extends Elem

  // abstraction functions
  def apply(elems: Str*): Elem = this(elems)
  def apply(elems: Iterable[Str]): Elem = alpha(elems)
  def alpha(elems: Iterable[Str]): Elem = maxSizeOpt match {
    case Some(max) if elems.size > max => Top
    case _ => Base(elems.toSet)
  }

  // appender
  implicit val app: App[Elem] = (app, elem) => elem match {
    case Top => app >> topName
    case Base(set) => app >> (set.size match {
      case 0 => "⊥"
      case 1 => set.head.toString
      case _ => set.toList.map(_.toString).sorted.mkString("{", ", ", "}")
    })
  }

  // elements
  sealed trait Elem extends ElemTrait {
    // partial order
    def ⊑(that: Elem): Boolean = (this, that) match {
      case (_, Top) => true
      case (Top, _) => false
      case (Base(lset), Base(rset)) => lset subsetOf rset
    }

    // join operator
    def ⊔(that: Elem): Elem = (this, that) match {
      case (Top, _) | (_, Top) => Top
      case (Base(lset), Base(rset)) => alpha(lset ++ rset)
    }

    // meet operator
    def ⊓(that: Elem): Elem = (this, that) match {
      case (Top, _) => that
      case (_, Top) => this
      case (Base(lset), Base(rset)) => Base(lset intersect rset)
    }

    // get single value
    def getSingle: Flat[Str] = this match {
      case Base(set) => set.size match {
        case 0 => FlatBot
        case 1 => FlatElem(set.head)
        case _ => FlatTop
      }
      case _ => FlatTop
    }

    // iterators
    final def iterator: Iterator[Str] = (this match {
      case Base(set) => set
      case Top => totalOpt.getOrElse {
        exploded(s"impossible to concretize the top value of $topName.")
      }
    }).iterator

    // contains check
    def contains(elem: Str): Boolean = this match {
      case Top => true
      case Base(set) => set contains elem
    }
    def plus(that: Elem): Elem = (this, that) match {
      case (Base(lset), Base(rset)) => alpha(for {
        Str(l) <- lset
        Str(r) <- rset
      } yield Str(l + r))
      case _ => Top
    }
    def plusNum(that: AbsNum): Elem = (this, that.getSingle) match {
      case (_, FlatBot) => Bot
      case (Base(lset), FlatElem(Num(r))) => alpha(for {
        Str(l) <- lset
      } yield Str(l + Character.toChars(r.toInt).mkString("")))
      case _ => Top
    }
  }
}
