package kr.ac.kaist.jsaver.analyzer

import kr.ac.kaist.jiset.error.{ InterpTimeout, AnalysisTimeout, AnalysisImprecise, NotSupported }
import kr.ac.kaist.jsaver._
import kr.ac.kaist.jsaver.analyzer.domain._
import kr.ac.kaist.jsaver.analyzer.{ Initialize => AInintialize, _ }
import kr.ac.kaist.jsaver.ir._
import kr.ac.kaist.jsaver.js.Test262._
import kr.ac.kaist.jsaver.js.ast._
import kr.ac.kaist.jsaver.js.{ Parser => JSParser, _ }
import kr.ac.kaist.jsaver.phase._
import kr.ac.kaist.jsaver.spec.NativeHelper._
import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.util.Useful._
import kr.ac.kaist.jsaver.util._
import scala.sys.process._
import io.circe._, io.circe.syntax._, io.circe.parser.{ parse => parseJson }

trait AnalyzerTest extends JSAVERTest {
  override def category: String = "analyzer"

  // cursor generator
  val cursorGen: CursorGen[_ <: Cursor] = NodeCursor

  // parse JS code
  def parse(str: String): Script =
    JSParser.parse(JSParser.Script(Nil), str).get
  def parseFile(filename: String): Script =
    JSParser.parse(JSParser.Script(Nil), fileReader(filename)).get

  // analyze JS code
  def analyze(str: String, execLevel: Int): AbsSemantics =
    analyze(parse(str), execLevel)
  def analyzeFile(filename: String, execLevel: Int): AbsSemantics =
    analyze(parseFile(filename), execLevel)
  def analyze(script: Script, execLevel: Int): AbsSemantics = {
    // intitialize spec
    JSAVERTest.spec
    // fixpoint calculation
    AbsSemantics(script, execLevel, Some(ANALYSIS_TIMEOUT)).fixpoint
  }

  // tests for JS analyzer
  def analyzeTestFile(filename: String): AbsSemantics =
    analyzeFile(filename, 0)
  def analyzeTest(script: Script): AbsSemantics =
    analyze(script, 0)

  // conversion extension from .js to .ir
  val js2ir = changeExt("js", "ir")

  // directory name
  val logDir = s"$LOG_DIR/test262_$dateStr"

  // test 262 tests
  def test262Test(
    targets: List[NormalTestConfig],
    name: String,
    testDir: String = TEST262_TEST_DIR
  ): Unit = if (!targets.isEmpty) {
    val progress = ProgressBar(s"test262 $name test", targets)
    val summary = progress.summary
    mkdir(logDir)
    dumpFile(JSAVERTest.spec.version, s"$logDir/ecma262-version")
    dumpFile(currentVersion(BASE_DIR), s"$logDir/jiset-version")
    summary.timeouts.setPath(s"$logDir/$name-timeout.log")
    summary.yets.setPath(s"$logDir/$name-yet.log")
    summary.fails.setPath(s"$logDir/$name-fail.log")
    summary.passes.setPath(s"$logDir/$name-pass.log")
    for (config <- progress) {
      val NormalTestConfig(name, includes) = config
      val jsName = s"$testDir/$name"
      try {
        // parse test262 including harness
        val includeStmts = includes.foldLeft(basicStmts) {
          case (li, s) => for {
            x <- li
            y <- getInclude(s)
          } yield x ++ y
        } match {
          case Right(l) => l
          case Left(msg) => throw NotSupported(msg)
        }
        val stmts = includeStmts ++ flattenStmt(parseFile(jsName))
        val merged = mergeStmt(stmts)
        analyzeTest(merged)
        summary.passes += name
      } catch {
        case InterpTimeout | AnalysisTimeout =>
          summary.timeouts += name
        case AnalysisImprecise(msg) =>
          summary.fails += s"$name: $msg"
        case NotSupported(msg) =>
          summary.yets += s"$name: $msg"
        case e: Throwable =>
          summary.fails += s"$name: ${e.getMessage}"
      }
    }
    summary.close

    // dump logs
    dumpFile(summary, s"$logDir/$name-summary")
    if (summary.timeout > 0) println(s"${summary.timeout} tests are timeout.")
    if (summary.yet > 0) println(s"${summary.yet} tests are not yet supported.")
    if (summary.fail > 0) fail(s"${summary.fail} tests are failed.")
  }
}
