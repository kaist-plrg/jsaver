package jsaver.ir

import jsaver.js.{ RETURN, TOP_LEVEL }
import jsaver.js.ast.AST
import jsaver.spec.algorithm._
import scala.collection.mutable.{ Map => MMap }

case class Context(
  var cursorOpt: Option[Cursor] = None,
  var prevCursorOpt: Option[Cursor] = None,
  val retId: Id = Id(RETURN),
  val name: String = TOP_LEVEL,
  val astOpt: Option[AST] = None,
  val algo: Option[Algo] = None,
  val locals: MMap[Id, Value] = MMap()
) extends IRElem {
  def copied: Context = copy(locals = MMap.from(locals))
  def isBuiltin: Boolean = algo.fold(false)(_.isBuiltin)
  // move cursor
  def moveNext: Unit = {
    prevCursorOpt = cursorOpt
    cursorOpt = cursorOpt.flatMap(_.next)
  }
  // debugger info
  def getAlgoName: String = algo match {
    case Some(algo) => algo.name
    case None => name
  }
  private def getLine(cur: Option[Cursor]): Int = cur.flatMap(_.inst) match {
    case Some(inst) => inst.line.getOrElse(-1)
    case None => -1
  }
  def getInfo(
    fromPrev: Boolean = false
  ): (String, Int, List[(String, String)]) = (
    getAlgoName,
    getLine(if (fromPrev) prevCursorOpt else cursorOpt),
    locals.toList.map {
      case (Id(name), v) => (name, v.toString)
    }
  )
  // check if AST evaluation
  def isAstEvaluation: Boolean =
    astOpt.nonEmpty && algo.fold(false)(_.head match {
      case s: SyntaxDirectedHead => s.methodName == "Evaluation"
      case _ => false
    })
}
