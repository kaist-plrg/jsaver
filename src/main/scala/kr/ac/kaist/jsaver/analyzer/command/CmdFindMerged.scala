package kr.ac.kaist.jsaver.analyzer.command

import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.cfg._
import kr.ac.kaist.jsaver.util.Useful._

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
