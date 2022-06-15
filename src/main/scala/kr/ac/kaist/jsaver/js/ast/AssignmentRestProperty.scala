package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait AssignmentRestProperty extends AST { val kind: String = "AssignmentRestProperty" }

object AssignmentRestProperty {
  def apply(data: Json): AssignmentRestProperty = AST(data) match {
    case Some(compressed) => AssignmentRestProperty(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): AssignmentRestProperty = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(DestructuringAssignmentTarget(_)).get
        AssignmentRestProperty0(x0, params, span)
    }
  }
}

case class AssignmentRestProperty0(x1: DestructuringAssignmentTarget, parserParams: List[Boolean], span: Span) extends AssignmentRestProperty {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("DestructuringAssignmentTarget", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"... $x1"
  }
}
