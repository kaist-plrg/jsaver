package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait FunctionStatementList extends AST { val kind: String = "FunctionStatementList" }

object FunctionStatementList {
  def apply(data: Json): FunctionStatementList = AST(data) match {
    case Some(compressed) => FunctionStatementList(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): FunctionStatementList = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(StatementList(_))
        FunctionStatementList0(x0, params, span)
    }
  }
}

case class FunctionStatementList0(x0: Option[StatementList], parserParams: List[Boolean], span: Span) extends FunctionStatementList {
  x0.foreach((m) => m.parent = Some(this))
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("Option[StatementList]", x0, Nil).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"${x0.getOrElse("")}"
  }
}
