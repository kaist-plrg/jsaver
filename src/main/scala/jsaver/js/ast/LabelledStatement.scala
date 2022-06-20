package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait LabelledStatement extends AST { val kind: String = "LabelledStatement" }

object LabelledStatement {
  def apply(data: Json): LabelledStatement = AST(data) match {
    case Some(compressed) => LabelledStatement(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): LabelledStatement = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(LabelIdentifier(_)).get
        val x1 = subs(1).map(LabelledItem(_)).get
        LabelledStatement0(x0, x1, params, span)
    }
  }
}

case class LabelledStatement0(x0: LabelIdentifier, x2: LabelledItem, parserParams: List[Boolean], span: Span) extends LabelledStatement {
  x0.parent = Some(this)
  x2.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x2, d(x0, 0))
  def fullList: List[(String, PureValue)] = l("LabelledItem", x2, l("LabelIdentifier", x0, Nil)).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0 : $x2"
  }
}
