package kr.ac.kaist.jsaver.analyzer

import kr.ac.kaist.jsaver._
import kr.ac.kaist.jsaver.cfg.{ DotPrinter => _, _ }
import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.util.Useful._
import scala.Console._

object NativeHelper {
  // path in CFG
  val CFG_PATH = s"$ANALYZE_LOG_DIR/cfg"
  mkdir(CFG_PATH)

  // dump CFG in DOT/PDF format
  def dumpCFG(
    sem: AbsSemantics,
    cp: Option[ControlPoint] = None,
    pdf: Boolean = true,
    depth: Option[Int] = None,
    path: Option[Path] = None
  ): Unit = try {
    dumpDot(Graph(sem, cp, depth, path).toDot, pdf)
  } catch {
    case _: Throwable => printlnColor(RED)(s"Cannot dump CFG")
  }

  // dump CFG Function in semaDOT/PDF format
  def dumpFunc(
    func: Function,
    pdf: Boolean = true
  ): Unit = try {
    dumpDot(func.toDot, pdf)
  } catch {
    case _: Throwable => printlnColor(RED)(s"Cannot dump CFG function")
  }

  // dump DOT
  def dumpDot(dot: String, pdf: Boolean): Unit = {
    dumpFile(dot, s"$CFG_PATH.dot")
    if (pdf) {
      executeCmd(s"""unflatten -l 10 -o ${CFG_PATH}_trans.dot $CFG_PATH.dot""")
      executeCmd(s"""dot -Tpdf "${CFG_PATH}_trans.dot" -o "$CFG_PATH.pdf"""")
      println(s"Dumped CFG to $CFG_PATH.pdf")
    } else println(s"Dumped CFG to $CFG_PATH.dot")
  }
}
