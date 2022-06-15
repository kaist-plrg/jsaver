package kr.ac.kaist.jsaver.analyzer

import kr.ac.kaist.jsaver.analyzer.domain._
import kr.ac.kaist.jsaver.cfg._
import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.js
import kr.ac.kaist.jsaver.js.ast._

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
