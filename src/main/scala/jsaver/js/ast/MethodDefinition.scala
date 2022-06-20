package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait MethodDefinition extends AST { val kind: String = "MethodDefinition" }

object MethodDefinition {
  def apply(data: Json): MethodDefinition = AST(data) match {
    case Some(compressed) => MethodDefinition(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): MethodDefinition = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(PropertyName(_)).get
        val x1 = subs(1).map(UniqueFormalParameters(_)).get
        val x2 = subs(2).map(FunctionBody(_)).get
        MethodDefinition0(x0, x1, x2, params, span)
      case 1 =>
        val x0 = subs(0).map(GeneratorMethod(_)).get
        MethodDefinition1(x0, params, span)
      case 2 =>
        val x0 = subs(0).map(AsyncMethod(_)).get
        MethodDefinition2(x0, params, span)
      case 3 =>
        val x0 = subs(0).map(AsyncGeneratorMethod(_)).get
        MethodDefinition3(x0, params, span)
      case 4 =>
        val x0 = subs(0).map(PropertyName(_)).get
        val x1 = subs(1).map(FunctionBody(_)).get
        MethodDefinition4(x0, x1, params, span)
      case 5 =>
        val x0 = subs(0).map(PropertyName(_)).get
        val x1 = subs(1).map(PropertySetParameterList(_)).get
        val x2 = subs(2).map(FunctionBody(_)).get
        MethodDefinition5(x0, x1, x2, params, span)
    }
  }
}

case class MethodDefinition0(x0: PropertyName, x2: UniqueFormalParameters, x5: FunctionBody, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x0.parent = Some(this)
  x2.parent = Some(this)
  x5.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x5, d(x2, d(x0, 0)))
  def fullList: List[(String, PureValue)] = l("FunctionBody", x5, l("UniqueFormalParameters", x2, l("PropertyName", x0, Nil))).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0 ( $x2 ) { $x5 }"
  }
}

case class MethodDefinition1(x0: GeneratorMethod, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x0.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("GeneratorMethod", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class MethodDefinition2(x0: AsyncMethod, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x0.parent = Some(this)
  def idx: Int = 2
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("AsyncMethod", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class MethodDefinition3(x0: AsyncGeneratorMethod, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x0.parent = Some(this)
  def idx: Int = 3
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("AsyncGeneratorMethod", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class MethodDefinition4(x1: PropertyName, x5: FunctionBody, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x1.parent = Some(this)
  x5.parent = Some(this)
  def idx: Int = 4
  def k: Int = d(x5, d(x1, 0))
  def fullList: List[(String, PureValue)] = l("FunctionBody", x5, l("PropertyName", x1, Nil)).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"get $x1 ( ) { $x5 }"
  }
}

case class MethodDefinition5(x1: PropertyName, x3: PropertySetParameterList, x6: FunctionBody, parserParams: List[Boolean], span: Span) extends MethodDefinition {
  x1.parent = Some(this)
  x3.parent = Some(this)
  x6.parent = Some(this)
  def idx: Int = 5
  def k: Int = d(x6, d(x3, d(x1, 0)))
  def fullList: List[(String, PureValue)] = l("FunctionBody", x6, l("PropertySetParameterList", x3, l("PropertyName", x1, Nil))).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"set $x1 ( $x3 ) { $x6 }"
  }
}
