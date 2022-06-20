package jsaver.analyzer

import jsaver.cfg
import jsaver.cfg.{ DotPrinter => _, _ }
import jsaver.util.Appender

trait DotPrinter extends cfg.DotPrinter {
  val SELECTED = """"gray""""

  // normalize strings for view
  private val normPattern = """[-:\[\](),\s~?"]""".r
  protected def norm(view: View): String = {
    normPattern.replaceAllIn(view.toString, "_")
  }
}
