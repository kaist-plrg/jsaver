package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait LabelIdentifier extends AST { val kind: String = "LabelIdentifier" }

object LabelIdentifier {
  def apply(data: Json): LabelIdentifier = AST(data) match {
    case Some(compressed) => LabelIdentifier(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): LabelIdentifier = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(Identifier(_)).get
        LabelIdentifier0(x0, params, span)
      case 1 =>
        LabelIdentifier1(params, span)
      case 2 =>
        LabelIdentifier2(params, span)
    }
  }
}

case class LabelIdentifier0(x0: Identifier, parserParams: List[Boolean], span: Span) extends LabelIdentifier {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("Identifier", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}

case class LabelIdentifier1(parserParams: List[Boolean], span: Span) extends LabelIdentifier {
  def idx: Int = 1
  def k: Int = 0
  def fullList: List[(String, PureValue)] = Nil.reverse
  def maxK: Int = 0
  override def toString: String = {
    s"yield"
  }
}

case class LabelIdentifier2(parserParams: List[Boolean], span: Span) extends LabelIdentifier {
  def idx: Int = 2
  def k: Int = 0
  def fullList: List[(String, PureValue)] = Nil.reverse
  def maxK: Int = 0
  override def toString: String = {
    s"await"
  }
}
