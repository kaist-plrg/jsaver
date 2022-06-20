package jsaver.analyzer

import jsaver.analyzer.domain._
import jsaver.cfg._
import jsaver.ir._
import jsaver.js
import jsaver.js.ast._

object Initialize {
  // the initial pair of control points and abstract states
  def apply(script: Script): (NodePoint[Entry], AbsState) =
    initCp -> initSt(script)

  // initial control point
  lazy val initCp = {
    val runJobs = js.cfg.funcMap("RunJobs")
    val entry = runJobs.entry
    NodePoint(entry, View())
  }

  // initial state
  def initSt(script: Script): AbsState = script match {
    case Script0(Some(body), _, _) => baseSt.defineGlobal(
      Id(js.SCRIPT_BODY) -> AbsValue(body)
    )
    case _ => baseSt
  }

  // base initial state
  lazy val baseSt: AbsState = AbsState.Empty
}
