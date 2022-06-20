package jsaver.phase

import jsaver.{ JSAVER, JSAVERConfig }

// Help phase
case object Help extends Phase[Unit, HelpConfig, Unit] {
  val name = "help"
  val help = "shows help messages."

  def apply(
    unit: Unit,
    jsaverConfig: JSAVERConfig,
    config: HelpConfig
  ): Unit = println(JSAVER.help)
  def defaultConfig: HelpConfig = HelpConfig()
  val options: List[PhaseOption[HelpConfig]] = Nil
}

case class HelpConfig() extends Config
