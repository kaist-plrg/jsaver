package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait SuperCall extends AST { val kind: String = "SuperCall" }

object SuperCall {
  def apply(data: Json): SuperCall = AST(data) match {
    case Some(compressed) => SuperCall(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): SuperCall = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        val x0 = subs(0).map(Arguments(_)).get
        SuperCall0(x0, params, span)
    }
  }
}

case class SuperCall0(x1: Arguments, parserParams: List[Boolean], span: Span) extends SuperCall {
  x1.parent = Some(this)
  def idx: Int = 0
  def k: Int = d(x1, 0)
  def fullList: List[(String, PureValue)] = l("Arguments", x1, Nil).reverse
  def maxK: Int = 0
  override def toString: String = {
    s"super $x1"
  }
}
