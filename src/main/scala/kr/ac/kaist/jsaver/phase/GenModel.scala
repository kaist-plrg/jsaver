package kr.ac.kaist.jsaver.phase

import kr.ac.kaist.jsaver._
import kr.ac.kaist.jsaver.generator._
import kr.ac.kaist.jsaver.spec._
import kr.ac.kaist.jsaver.util._
import kr.ac.kaist.jsaver.util.Useful._

// GenModel phase
case object GenModel extends Phase[ECMAScript, GenModelConfig, Unit] {
  val name: String = "gen-model"
  val help: String = "generates ECMAScript models."

  def apply(
    spec: ECMAScript,
    jsaverConfig: JSAVERConfig,
    config: GenModelConfig
  ): Unit = time(s"generating models", {
    ModelGenerator(spec, config.parser)
  })

  def defaultConfig: GenModelConfig = GenModelConfig()
  val options: List[PhaseOption[GenModelConfig]] = List(
    ("parser", BoolOption(c => c.parser = true),
      "generate JavaScript parser."),
  )
}

// GenModel phase config
case class GenModelConfig(
  var parser: Boolean = false
) extends Config
