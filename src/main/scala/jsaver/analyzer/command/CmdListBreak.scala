package jsaver.analyzer.command

import jsaver.analyzer._

// list-break command
case object CmdListBreak extends Command(
  "list-break", "Show the list of break points."
) {
  // options
  val options: List[String] = Nil

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = for {
    ((k, v), i) <- repl.breakpoints.zipWithIndex
  } println(f"$i: $k%-15s $v")
}
