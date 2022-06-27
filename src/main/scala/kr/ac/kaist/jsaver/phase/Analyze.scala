package kr.ac.kaist.jsaver.phase

import kr.ac.kaist.jsaver.JSAVERConfig
import kr.ac.kaist.jsaver._
import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.js._
import kr.ac.kaist.jsaver.js.ast.Script
import kr.ac.kaist.jsaver.spec.NativeHelper._
import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.util._

// Analyze phase
case object Analyze extends Phase[Script, AnalyzeConfig, AbsSemantics] {
  val name = "analyze"
  val help = "performs static analysis for a given JavaScript program."

  def apply(
    script: Script,
    jsaverConfig: JSAVERConfig,
    config: AnalyzeConfig
  ): AbsSemantics = {
    setSpec(loadSpec(s"$RESOURCE_DIR/$VERSION/generated"))
    AbsSemantics(script, config.timeout).fixpoint
  }

  def defaultConfig: AnalyzeConfig = AnalyzeConfig()
  val options: List[PhaseOption[AnalyzeConfig]] = List(
    ("loop-iter", NumOption((c, i) => LOOP_ITER = i),
      "set maximum loop iteration."),
    ("loop-depth", NumOption((c, i) => LOOP_DEPTH = i),
      "set maximum loop depth."),
    ("js-k-cfa", NumOption((c, i) => JS_CALL_DEPTH = i),
      "set k for JavaScrpt callsite sensitivity."),
    ("ir-k-cfa", NumOption((c, i) => IR_CALL_DEPTH = i),
      "set k for IRES callsite sensitivity."),
    ("timeout", NumOption((c, i) => c.timeout = if (i == 0) None else Some(i)),
      "set timeout of analyzer(second), 0 for unlimited.")
  )
}

// Analyze phase config
case class AnalyzeConfig(
  var execLevel: Int = 0,
  var timeout: Option[Long] = None
) extends Config
