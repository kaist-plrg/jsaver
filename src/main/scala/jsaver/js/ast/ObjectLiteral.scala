package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ObjectLiteral extends AST { val kind: String = "ObjectLiteral" }

object ObjectLiteral {
  def apply(data: Json): ObjectLiteral = AST(data) match {
    case Some(compressed) => ObjectLiteral(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ObjectLiteral = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        ObjectLiteral0(params, span)
      case 1 =>
        val x0 = subs(0).map(PropertyDefinitionList(_)).get
        ObjectLiteral1(x0, params, span)
      case 2 =>
        val x0 = subs(0).map(PropertyDefinitionList(_)).get
        ObjectLiteral2(x0, params, span)
    }
  }
}

case class ObjectLiteral0(parserParams: List[Boolean], span: Span) extends ObjectLiteral {
  def idx: Int = 0
  def k: Int = 0
  def fullList: List[(String, PureValue)] = Nil.reverse
  def maxK: Int = 0
  override def toString: String = {
    s"{ }"
  }
}

case class ObjectLiteral1(x1: PropertyDefinitionList, parserParams: List[Boolean], span: Span) extends ObjectLiteral {
  x1.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("PropertyDefinitionList", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"{ $x1 }"
  }
}

case class ObjectLiteral2(x1: PropertyDefinitionList, parserParams: List[Boolean], span: Span) extends ObjectLiteral {
  x1.parent = Some(this)
  def idx: Int = 2
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("PropertyDefinitionList", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"{ $x1 , }"
  }
}
