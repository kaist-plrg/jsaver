package kr.ac.kaist.jsaver.analyzer.command

import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.util.Useful._

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
