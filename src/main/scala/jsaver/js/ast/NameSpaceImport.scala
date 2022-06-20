package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait NameSpaceImport extends AST { val kind: String = "NameSpaceImport" }

object NameSpaceImport {
  def apply(data: Json): NameSpaceImport = AST(data) match {
    case Some(compressed) => NameSpaceImport(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): NameSpaceImport = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(ImportedBinding(_)).get
        NameSpaceImport0(x0, params, span)
    }
  }
}

case class NameSpaceImport0(x2: ImportedBinding, parserParams: List[Boolean], span: Span) extends NameSpaceImport {
  x2.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x2, 0)
  def fullList: List[(String, PureValue)] = l("ImportedBinding", x2, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"* as $x2"
  }
}
