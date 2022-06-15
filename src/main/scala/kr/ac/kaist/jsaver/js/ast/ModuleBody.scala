package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait ModuleBody extends AST { val kind: String = "ModuleBody" }

object ModuleBody {
  def apply(data: Json): ModuleBody = AST(data) match {
    case Some(compressed) => ModuleBody(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): ModuleBody = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(ModuleItemList(_)).get
        ModuleBody0(x0, params, span)
    }
  }
}

case class ModuleBody0(x0: ModuleItemList, parserParams: List[Boolean], span: Span) extends ModuleBody {
  x0.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x0, 0)
  def fullList: List[(String, PureValue)] = l("ModuleItemList", x0, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"$x0"
  }
}
