package kr.ac.kaist.jsaver.analyzer.command

import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.util.Useful._

// exit command
case object CmdExit extends Command(
  "exit",
  "Exit the type checking."
) {
  // options
  val options = Nil

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = error("stop for debugging")
}
