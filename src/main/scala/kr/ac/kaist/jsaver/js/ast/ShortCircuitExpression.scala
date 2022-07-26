package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ShortCircuitExpression extends AST { val kind: String = "ShortCircuitExpression" }

object ShortCircuitExpression {
  def apply(data: Json): ShortCircuitExpression = AST(data) match {
    case Some(compressed) => ShortCircuitExpression(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ShortCircuitExpression = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(PipelineExpression(_)).get
        ShortCircuitExpression0(x0, params, span)
      case 1 =>
        val x0 = subs(0).map(CoalesceExpression(_)).get
        ShortCircuitExpression1(x0, params, span)
    }
  }
}

case class ShortCircuitExpression0(x0: PipelineExpression, parserParams: List[Boolean], span: Span) extends ShortCircuitExpression {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("PipelineExpression", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class ShortCircuitExpression1(x0: CoalesceExpression, parserParams: List[Boolean], span: Span) extends ShortCircuitExpression {
  x0.parent = Some(this)
  def idx: Int = 1
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("CoalesceExpression", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}
