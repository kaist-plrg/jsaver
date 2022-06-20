package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait GeneratorBody extends AST { val kind: String = "GeneratorBody" }

object GeneratorBody {
  def apply(data: Json): GeneratorBody = AST(data) match {
    case Some(compressed) => GeneratorBody(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): GeneratorBody = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(FunctionBody(_)).get
        GeneratorBody0(x0, params, span)
    }
  }
}

case class GeneratorBody0(x0: FunctionBody, parserParams: List[Boolean], span: Span) extends GeneratorBody {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("FunctionBody", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}
