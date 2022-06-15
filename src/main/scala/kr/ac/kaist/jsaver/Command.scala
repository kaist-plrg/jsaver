package kr.ac.kaist.jsaver

import kr.ac.kaist.jsaver.phase._
import kr.ac.kaist.jsaver.spec._
import kr.ac.kaist.jsaver.util.ArgParser
import scala.Console.CYAN

sealed abstract class Command[Result](
  val name: String,
  val pList: PhaseList[Result]
) {
  def help: String
  def display(res: Result): Unit = ()

  def apply(args: List[String]): Result = {
    val jsaverConfig = JSAVERConfig(this)
    val parser = new ArgParser(this, jsaverConfig)
    val runner = pList.getRunner(parser)
    parser(args)
    JSAVER(this, runner(_), jsaverConfig)
  }

  override def toString: String = pList.toString

  def >>[C <: Config, R](phase: Phase[Result, C, R]): PhaseList[R] = pList >> phase
}

// base command
case object CmdBase extends Command("", PhaseNil) {
  def help = "does nothing."
}

// help
case object CmdHelp extends Command("help", CmdBase >> Help) {
  def help = "shows help messages."
}

////////////////////////////////////////////////////////////////////////////////
// JISET (JavaScript IR-based Semantics Extraction Toolchain)
////////////////////////////////////////////////////////////////////////////////
// extract
case object CmdExtract extends Command("extract", CmdBase >> Extract) {
  def help = "extracts ECMAScript model from ecma262/spec.html."
  override def display(spec: ECMAScript): Unit = println(spec)
}

// gen-model
case object CmdGenModel extends Command("gen-model", CmdExtract >> GenModel) {
  def help = "generates ECMAScript models."
}

////////////////////////////////////////////////////////////////////////////////
// JSAVER (JavaScript Static Analyzer via ECMAScript Representations)
////////////////////////////////////////////////////////////////////////////////
// parse
case object CmdParse extends Command("parse", CmdBase >> Parse) {
  def help = "parses a JavaScript file using the generated parser."
  override def display(script: js.ast.Script): Unit = println(script)
}

// analyze
case object CmdAnalyze extends Command("analyze", CmdParse >> Analyze) {
  def help = "performs static analysis for a given JavaScript program."
  override def display(sem: analyzer.AbsSemantics): Unit = {
    println(sem.getString(sem.runJobsRp, CYAN, detail = true))
  }
}

////////////////////////////////////////////////////////////////////////////////
// Test262
////////////////////////////////////////////////////////////////////////////////
// filter-meta
case object CmdFilterMeta extends Command("filter-meta", CmdBase >> FilterMeta) {
  def help = "extracts and filters out metadata of test262 tests."
}
