package kr.ac.kaist.jsaver.phase

import kr.ac.kaist.jsaver.JSAVERConfig
import kr.ac.kaist.jsaver.util.ArgParser

trait Phase[Input, PhaseConfig <: Config, Output] {
  val name: String
  val help: String
  def apply(
    in: Input,
    jsaverConfig: JSAVERConfig,
    config: PhaseConfig = defaultConfig
  ): Output
  def defaultConfig: PhaseConfig
  val options: List[PhaseOption[PhaseConfig]]

  def getRunner(
    parser: ArgParser
  ): (Input, JSAVERConfig) => Output = {
    val config = defaultConfig
    parser.addRule(config, name, options)
    (in, jsaverConfig) => {
      if (!jsaverConfig.silent) {
        println(s"========================================")
        println(s" $name phase")
        println(s"----------------------------------------")
      }
      apply(in, jsaverConfig, config)
    }
  }

  def getOptShapes: List[String] = options.map {
    case (opt, kind, _) => s"-$name:${opt}${kind.postfix}"
  }
  def getOptDescs: List[(String, String)] = options.map {
    case (opt, kind, desc) => (s"-$name:${opt}${kind.postfix}", desc)
  }
}

trait Config
