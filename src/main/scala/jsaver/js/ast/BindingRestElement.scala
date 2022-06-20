package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait BindingRestElement extends AST { val kind: String = "BindingRestElement" }

object BindingRestElement {
  def apply(data: Json): BindingRestElement = AST(data) match {
    case Some(compressed) => BindingRestElement(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): BindingRestElement = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(BindingIdentifier(_)).get
        BindingRestElement0(x0, params, span)
      case 1 =>
        val x0 = subs(0).map(BindingPattern(_)).get
        BindingRestElement1(x0, params, span)
    }
  }
}

case class BindingRestElement0(x1: BindingIdentifier, parserParams: List[Boolean], span: Span) extends BindingRestElement {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("BindingIdentifier", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"... $x1"
  }
}

case class BindingRestElement1(x1: BindingPattern, parserParams: List[Boolean], span: Span) extends BindingRestElement {
  x1.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("BindingPattern", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"... $x1"
  }
}
