package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait AssignmentRestElement extends AST { val kind: String = "AssignmentRestElement" }

object AssignmentRestElement {
  def apply(data: Json): AssignmentRestElement = AST(data) match {
    case Some(compressed) => AssignmentRestElement(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): AssignmentRestElement = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(DestructuringAssignmentTarget(_)).get
        AssignmentRestElement0(x0, params, span)
    }
  }
}

case class AssignmentRestElement0(x1: DestructuringAssignmentTarget, parserParams: List[Boolean], span: Span) extends AssignmentRestElement {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("DestructuringAssignmentTarget", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"... $x1"
  }
}
