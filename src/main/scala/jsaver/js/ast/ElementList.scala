package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ElementList extends AST { val kind: String = "ElementList" }

object ElementList {
  def apply(data: Json): ElementList = AST(data) match {
    case Some(compressed) => ElementList(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ElementList = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(Elision(_))
        val x1 = subs(1).map(AssignmentExpression(_)).get
        ElementList0(x0, x1, params, span)
      case 1 =>
        val x0 = subs(0).map(Elision(_))
        val x1 = subs(1).map(SpreadElement(_)).get
        ElementList1(x0, x1, params, span)
      case 2 =>
        val x0 = subs(0).map(ElementList(_)).get
        val x1 = subs(1).map(Elision(_))
        val x2 = subs(2).map(AssignmentExpression(_)).get
        ElementList2(x0, x1, x2, params, span)
      case 3 =>
        val x0 = subs(0).map(ElementList(_)).get
        val x1 = subs(1).map(Elision(_))
        val x2 = subs(2).map(SpreadElement(_)).get
        ElementList3(x0, x1, x2, params, span)
    }
  }
}

case class ElementList0(x0: Option[Elision], x1: AssignmentExpression, parserParams: List[Boolean], span: Span) extends ElementList {
  x0.foreach((m) => m.parent = Some(this))
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, d(x0, 0))
  def fullList: List[(String, PureValue)] = l("AssignmentExpression", x1, l("Option[Elision]", x0, Nil)).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"${x0.getOrElse("")} $x1"
  }
}

case class ElementList1(x0: Option[Elision], x1: SpreadElement, parserParams: List[Boolean], span: Span) extends ElementList {
  x0.foreach((m) => m.parent = Some(this))
  x1.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x1, d(x0, 0))
  def fullList: List[(String, PureValue)] = l("SpreadElement", x1, l("Option[Elision]", x0, Nil)).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"${x0.getOrElse("")} $x1"
  }
}

case class ElementList2(x0: ElementList, x2: Option[Elision], x3: AssignmentExpression, parserParams: List[Boolean], span: Span) extends ElementList {
  x0.parent = Some(this)
  x2.foreach((m) => m.parent = Some(this))
  x3.parent = Some(this)
  def idx: Int = 2
  def k: Int = d(x3, d(x2, d(x0, 0)))
  def fullList: List[(String, PureValue)] = l("AssignmentExpression", x3, l("Option[Elision]", x2, l("ElementList", x0, Nil))).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"$x0 , ${x2.getOrElse("")} $x3"
  }
}

case class ElementList3(x0: ElementList, x2: Option[Elision], x3: SpreadElement, parserParams: List[Boolean], span: Span) extends ElementList {
  x0.parent = Some(this)
  x2.foreach((m) => m.parent = Some(this))
  x3.parent = Some(this)
  def idx: Int = 3
  def k: Int = d(x3, d(x2, d(x0, 0)))
  def fullList: List[(String, PureValue)] = l("SpreadElement", x3, l("Option[Elision]", x2, l("ElementList", x0, Nil))).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"$x0 , ${x2.getOrElse("")} $x3"
  }
}
