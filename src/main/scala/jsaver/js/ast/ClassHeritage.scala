package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ClassHeritage extends AST { val kind: String = "ClassHeritage" }

object ClassHeritage {
  def apply(data: Json): ClassHeritage = AST(data) match {
    case Some(compressed) => ClassHeritage(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ClassHeritage = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(LeftHandSideExpression(_)).get
        ClassHeritage0(x0, params, span)
    }
  }
}

case class ClassHeritage0(x1: LeftHandSideExpression, parserParams: List[Boolean], span: Span) extends ClassHeritage {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("LeftHandSideExpression", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"extends $x1"
  }
}
