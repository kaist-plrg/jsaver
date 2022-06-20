package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait SuperProperty extends AST { val kind: String = "SuperProperty" }

object SuperProperty {
  def apply(data: Json): SuperProperty = AST(data) match {
    case Some(compressed) => SuperProperty(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): SuperProperty = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(Expression(_)).get
        SuperProperty0(x0, params, span)
      case 1 =>
        val x0 = subs(0).map(Lexical(_)).get
        SuperProperty1(x0, params, span)
    }
  }
}

case class SuperProperty0(x2: Expression, parserParams: List[Boolean], span: Span) extends SuperProperty {
  x2.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x2, 0)
  def fullList: List[(String, PureValue)] = l("Expression", x2, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"super [ $x2 ]"
  }
}

case class SuperProperty1(x2: Lexical, parserParams: List[Boolean], span: Span) extends SuperProperty {
  x2.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x2, 0)
  def fullList: List[(String, PureValue)] = l("Lexical", x2, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"super . $x2"
  }
}
