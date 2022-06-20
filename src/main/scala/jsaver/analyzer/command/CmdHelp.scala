package jsaver.analyzer.command

import jsaver.analyzer._

// help command
case object CmdHelp extends Command(
  "help", "Show help message."
) {
  // options
  val options = Nil

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = showHelp

  // show help message
  def showHelp: Unit = {
    println
    println("command list:")
    for (cmd <- Command.commands) {
      println("- %-25s%s".format(cmd.name, cmd.help))
    }
  }
}
