package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait BindingList extends AST { val kind: String = "BindingList" }

object BindingList {
  def apply(data: Json): BindingList = AST(data) match {
    case Some(compressed) => BindingList(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): BindingList = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(LexicalBinding(_)).get
        BindingList0(x0, params, span)
      case 1 =>
        val x0 = subs(0).map(BindingList(_)).get
        val x1 = subs(1).map(LexicalBinding(_)).get
        BindingList1(x0, x1, params, span)
    }
  }
}

case class BindingList0(x0: LexicalBinding, parserParams: List[Boolean], span: Span) extends BindingList {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("LexicalBinding", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class BindingList1(x0: BindingList, x2: LexicalBinding, parserParams: List[Boolean], span: Span) extends BindingList {
  x0.parent = Some(this)
  x2.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x2, d(x0, 0))
  def fullList: List[(String, PureValue)] = l("LexicalBinding", x2, l("BindingList", x0, Nil)).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0 , $x2"
  }
}
