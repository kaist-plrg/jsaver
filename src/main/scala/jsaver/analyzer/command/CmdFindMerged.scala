package jsaver.analyzer.command

import jsaver.analyzer._
import jsaver.cfg._
import jsaver.util.Useful._

// find-merged command
case object CmdFindMerged extends Command(
  "find-merged", "Find merged analysis results."
) {
  // options
  val options = Nil

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = cpOpt.map(cp => {
    val st = cp match {
      case np: NodePoint[Node] => repl.sem(np)
      case rp: ReturnPoint => repl.sem(rp).state
    }
    st.findMerged
  })
}
