package jsaver.analyzer

import jsaver.cfg._
import jsaver.js._

// control points
sealed trait ControlPoint extends AnalyzerElem {
  // view
  val view: View

  // get function
  def func: Function

  // check whether it is in a built-in algorithm
  def isBuiltin: Boolean = func.origin match {
    case AlgoOrigin(algo) => algo.isBuiltin
    case _ => false
  }
}
case class NodePoint[+T <: Node](node: T, view: View) extends ControlPoint {
  // get function
  def func: Function = cfg.funcOf(node)
}
case class ReturnPoint(func: Function, view: View) extends ControlPoint
