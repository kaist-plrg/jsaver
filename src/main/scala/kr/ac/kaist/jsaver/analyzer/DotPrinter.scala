package kr.ac.kaist.jsaver.analyzer

import kr.ac.kaist.jsaver.cfg
import kr.ac.kaist.jsaver.cfg.{ DotPrinter => _, _ }
import kr.ac.kaist.jsaver.util.Appender

trait DotPrinter extends cfg.DotPrinter {
  val SELECTED = """"gray""""

  // normalize strings for view
  private val normPattern = """[-:\[\](),\s~?"]""".r
  protected def norm(view: View): String = {
    normPattern.replaceAllIn(view.toString, "_")
  }
}
