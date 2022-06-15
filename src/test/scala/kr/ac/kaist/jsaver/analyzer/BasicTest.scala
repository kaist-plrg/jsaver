package kr.ac.kaist.jsaver.analyzer

import kr.ac.kaist.jsaver.JS_DIR
import kr.ac.kaist.jsaver.analyzer._
import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.phase._
import kr.ac.kaist.jsaver.util.JvmUseful._

class BasicTest extends AnalyzerTest {
  val name: String = "basicTest"

  // more loop depth
  LOOP_DEPTH = 50

  // registration
  def init: Unit = for (file <- walkTree(JS_DIR)) {
    val filename = file.getName
    if (jsFilter(filename)) check(filename, {
      val name = removedExt(filename)
      // analyze a JS file
      val jsName = file.toString
      analyzeFile(jsName, 1)
    })
  }
  init
}
