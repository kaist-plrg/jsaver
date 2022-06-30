package kr.ac.kaist.jsaver.analyzer.command

import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.analyzer.domain._
import kr.ac.kaist.jsaver.cfg._
import kr.ac.kaist.jsaver.ir.Expr
import kr.ac.kaist.jsaver.util.Useful._

// print command
case object CmdPrint extends Command(
  "print", "Print specific information"
) {
  // options
  val options @ List(reachLoc, ret, expr) = List("reach-loc", "return", "expr")

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
      case s"-${ `ret` }" :: _ => {
        val sem = repl.sem
        val v = cp match {
          case np: NodePoint[Node] => println("no return value")
          case rp: ReturnPoint =>
            val ret = sem(rp)
            println(ret.state.getString(ret.value))
        }
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
