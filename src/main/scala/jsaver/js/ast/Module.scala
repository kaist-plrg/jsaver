package jsaver.js.ast

import jsaver.ir._
import jsaver.util.Span
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait Module extends AST { val kind: String = "Module" }

object Module {
  def apply(data: Json): Module = AST(data) match {
    case Some(compressed) => Module(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): Module = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(ModuleBody(_))
        Module0(x0, params, span)
    }
  }
}

case class Module0(x0: Option[ModuleBody], parserParams: List[Boolean], span: Span) extends Module {
  x0.foreach((m) => m.parent = Some(this))
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("Option[ModuleBody]", x0, Nil).reverse
  def maxK: Int = 1
  override def toString: String = {
    s"${x0.getOrElse("")}"
  }
}
