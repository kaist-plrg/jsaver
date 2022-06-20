package jsaver.analyzer.command

import jsaver.analyzer._
import jsaver.analyzer.domain._
import jsaver.cfg._
import jsaver.ir.Expr
import jsaver.util.Useful._

// print command
case object CmdPrint extends Command(
  "print", "Print specific information"
) {
  // options
  val options @ List(reachLoc, expr) = List("reach-loc", "expr")

  // run command
  def apply(
    repl: REPL,
    cpOpt: Option[ControlPoint],
    args: List[String]
  ): Unit = {
    val cp = cpOpt.getOrElse(repl.sem.runJobsRp)
    args match {
      case s"-${ `reachLoc` }" :: _ => {
        val st = repl.sem.getState(cp)
        st.reachableLocs.foreach(println _)
      }
      case s"-${ `expr` }" :: str :: _ => {
        val sem = repl.sem
        val v = sem.transfer(cp, Expr(str))
        val st = cp match {
          case np: NodePoint[Node] => sem(np)
          case rp: ReturnPoint => sem(rp).state
        }
        println(st.getString(v))
      }
      case _ => println("Inappropriate argument")
    }
  }
}
