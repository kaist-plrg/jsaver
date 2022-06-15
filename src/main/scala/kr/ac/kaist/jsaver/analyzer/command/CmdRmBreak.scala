package kr.ac.kaist.jsaver.analyzer.command

import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.util.Useful._

// rm-break command
case object CmdRmBreak extends Command(
  "rm-break", "Remove a break point."
) {
  // options
  val options @ List(all) = List("all")

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = args match {
    case Nil => println("need arguments")
    case arg :: _ => {
      val breakpoints = repl.breakpoints
      optional(arg.toInt) match {
        case _ if arg == s"-$all" => breakpoints.clear
        case Some(idx) if idx.toInt < breakpoints.size =>
          breakpoints.remove(idx.toInt)
        case _ => println("Inappropriate argument")
      }
    }
  }
}
