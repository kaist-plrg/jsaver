package jsaver.analyzer.command

import jsaver.analyzer._
import jsaver.util.Useful._

// stop command
case object CmdStop extends Command(
  "stop", "Stop the repl."
) {
  // options
  val options = Nil

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = repl.stop
}
