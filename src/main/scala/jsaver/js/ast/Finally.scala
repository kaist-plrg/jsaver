package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait Finally extends AST { val kind: String = "Finally" }

object Finally {
  def apply(data: Json): Finally = AST(data) match {
    case Some(compressed) => Finally(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): Finally = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(Block(_)).get
        Finally0(x0, params, span)
    }
  }
}

case class Finally0(x1: Block, parserParams: List[Boolean], span: Span) extends Finally {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("Block", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"finally $x1"
  }
}
