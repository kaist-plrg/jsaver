package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait DestructuringAssignmentTarget extends AST { val kind: String = "DestructuringAssignmentTarget" }

object DestructuringAssignmentTarget {
  def apply(data: Json): DestructuringAssignmentTarget = AST(data) match {
    case Some(compressed) => DestructuringAssignmentTarget(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): DestructuringAssignmentTarget = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(LeftHandSideExpression(_)).get
        DestructuringAssignmentTarget0(x0, params, span)
    }
  }
}

case class DestructuringAssignmentTarget0(x0: LeftHandSideExpression, parserParams: List[Boolean], span: Span) extends DestructuringAssignmentTarget {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("LeftHandSideExpression", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}
