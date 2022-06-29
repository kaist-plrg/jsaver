package kr.ac.kaist.jsaver.phase

import kr.ac.kaist.jsaver.{ JSAVERConfig, VERSION, RESOURCE_DIR }
import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.analyzer.domain._
import kr.ac.kaist.jsaver.js._
import kr.ac.kaist.jsaver.js.ast.Script
import kr.ac.kaist.jsaver.spec.NativeHelper._
import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.util.Useful._
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
    config.version.map(VERSION = _)
    setSpec(loadSpec(s"$RESOURCE_DIR/$VERSION/generated"))
    AbsSemantics(script, config.timeout).fixpoint
  }

  private val strSetPattern = "set-(\\d+)".r

  def defaultConfig: AnalyzeConfig = AnalyzeConfig()
  val options: List[PhaseOption[AnalyzeConfig]] = List(
    ("version", StrOption((c, s) => c.version = Some(s)),
      "set the git version of ecma262."),
    ("repl", BoolOption(c => USE_REPL = true),
      "use a REPL for meta-level static analysis."),
    ("num", StrOption((c, s) => s match {
      case "flat" => ABS_NUM = FlatNum
      case "interval" => ABS_NUM = IntervalNum
      case _ => error(s"Invalid number domain: $s")
    }), "set number domain (flat or interval)."),
    ("str", StrOption((c, s) => s match {
      case strSetPattern(k) => ABS_STR = new SetStr(k.toInt)
      case "char-inc" => ABS_STR = CharIncStr
      case "prefix-suffix" => ABS_STR = PrefixSuffixStr
      case _ => error(s"Invalid string domain: $s")
    }), "set string domain (set-k, char-inc, or prefix-suffix)."),
    ("loop-iter", NumOption((c, i) => LOOP_ITER = i),
      "set maximum loop iteration."),
    ("loop-depth", NumOption((c, i) => LOOP_DEPTH = i),
      "set maximum loop depth."),
    ("js-k-cfa", NumOption((c, i) => JS_CALL_DEPTH = i),
      "set k for JavaScript callsite sensitivity."),
    ("ir-k-cfa", NumOption((c, i) => IR_CALL_DEPTH = i),
      "set k for IRES callsite sensitivity."),
    ("timeout", NumOption((c, i) => c.timeout = if (i == 0) None else Some(i)),
      "set timeout of analyzer(second), 0 for unlimited.")
  )
}

// Analyze phase config
case class AnalyzeConfig(
  var version: Option[String] = None,
  var timeout: Option[Long] = None
) extends Config
