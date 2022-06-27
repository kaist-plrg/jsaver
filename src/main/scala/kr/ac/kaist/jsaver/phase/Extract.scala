package kr.ac.kaist.jsaver.phase

import kr.ac.kaist.jsaver._
import kr.ac.kaist.jsaver.extractor.ECMAScriptParser
import kr.ac.kaist.jsaver.generator._
import kr.ac.kaist.jsaver.js.{ Parser => JSParser, _ }
import kr.ac.kaist.jsaver.spec.JsonProtocol._
import kr.ac.kaist.jsaver.spec._
import kr.ac.kaist.jsaver.spec.algorithm.Algo
import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.util.Useful._
import kr.ac.kaist.jsaver.util._

// Extract phase
case object Extract extends Phase[Unit, ExtractConfig, ECMAScript] {
  val name = "extract"
  val help = "extracts a definitional interpreter from ecma262/spec.html."

  def apply(
    unit: Unit,
    jsaverConfig: JSAVERConfig,
    config: ExtractConfig
  ): ECMAScript = {
    val (extractTime, spec) = {
      val version = config.version.getOrElse(VERSION)
      println(s"version: $version")
      time(s"parsing spec.html", ECMAScriptParser(version))
    }

    // generate models
    if (config.genModel) time(s"generating models", ModelGenerator(spec, false))

    // set spec for js
    setSpec(spec)

    spec
  }

  def defaultConfig: ExtractConfig = ExtractConfig()
  val options: List[PhaseOption[ExtractConfig]] = List(
    ("version", StrOption((c, s) => c.version = Some(s)),
      "set the git version of ecma262."),
    ("genModel", BoolOption(c => c.genModel = true),
      "generate models of the extracted definitional interpreter.")
  )
}

// Extract phase config
case class ExtractConfig(
  var version: Option[String] = None,
  var genModel: Boolean = false
) extends Config
