package kr.ac.kaist.jsaver.js.ast

import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.util.Span
import kr.ac.kaist.jsaver.util.Useful._
import io.circe._, io.circe.syntax._

trait DebuggerStatement extends AST { val kind: String = "DebuggerStatement" }

object DebuggerStatement {
  def apply(data: Json): DebuggerStatement = AST(data) match {
    case Some(compressed) => DebuggerStatement(compressed)
    case None => error("invalid AST data: $data")
  }
  def apply(data: AST.Compressed): DebuggerStatement = {
    val AST.NormalCompressed(idx, subs, params, span) = data
    idx match {
      case 0 =>
        DebuggerStatement0(params, span)
    }
  }
}

case class DebuggerStatement0(parserParams: List[Boolean], span: Span) extends DebuggerStatement {
  def idx: Int = 0
  def k: Int = 0
  def fullList: List[(String, PureValue)] = Nil.reverse
  def maxK: Int = 0
  override def toString: String = {
    s"debugger ;"
  }
}
