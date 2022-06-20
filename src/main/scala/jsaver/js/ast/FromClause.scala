package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait FromClause extends AST { val kind: String = "FromClause" }

object FromClause {
  def apply(data: Json): FromClause = AST(data) match {
    case Some(compressed) => FromClause(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): FromClause = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(ModuleSpecifier(_)).get
        FromClause0(x0, params, span)
    }
  }
}

case class FromClause0(x1: ModuleSpecifier, parserParams: List[Boolean], span: Span) extends FromClause {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("ModuleSpecifier", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"from $x1"
  }
}
