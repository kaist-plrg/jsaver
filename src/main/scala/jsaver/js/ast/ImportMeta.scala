package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ImportMeta extends AST { val kind: String = "ImportMeta" }

object ImportMeta {
  def apply(data: Json): ImportMeta = AST(data) match {
    case Some(compressed) => ImportMeta(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ImportMeta = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        ImportMeta0(params, span)
    }
  }
}

case class ImportMeta0(parserParams: List[Boolean], span: Span) extends ImportMeta {
  def idx: Int = 0
  def k: Int = 0
  def fullList: List[(String, PureValue)] = Nil.reverse
  def maxK: Int = 0
  override def toString: String = {
    s"import . meta"
  }
}
