package jsaver.analyzer

import jsaver.LINE_SEP
import jsaver.analyzer.command._
import jsaver.analyzer.NativeHelper._
import jsaver.cfg._
import jsaver.error.JSAVERError
import jsaver.js._
import jsaver.util.Useful._
import org.jline.builtins.Completers.TreeCompleter
import org.jline.builtins.Completers.TreeCompleter.{ Node => CNode, node }
import org.jline.reader._
import org.jline.reader.impl._
import org.jline.terminal._
import org.jline.utils.InfoCmp.Capability
import org.jline.utils._
import scala.Console._
import scala.collection.mutable.ArrayBuffer
import scala.util.matching.Regex

// REPL for static analysis
case class REPL(sem: AbsSemantics) {
  // completer
  private val completer: TreeCompleter =
    new TreeCompleter(Command.commands.map(optionNode(_)): _*)
  private def optionNode(cmd: Command) =
    node(cmd.name :: cmd.options.map(argNode(_)): _*)
  private def argNode(opt: String) =
    node(s"-$opt" :: getArgNodes(opt): _*)
  private def getArgNodes(opt: String): List[TreeCompleter.Node] = opt match {
    case CmdBreak.func => cfg.funcs.map(x => node(x.name))
    case CmdBreak.block => (0 until cfg.nidGen.size).map(x => node(x.toString)).toList
    case CmdInfo.ret => cfg.funcs.map(x => node(x.name))
    case CmdInfo.block => (0 until cfg.nidGen.size).map(x => node(x.toString)).toList
    case _ => Nil
  }

  // get the number of iterations
  def iter: Int = sem.getIter

  // show current status
  def showStatus(cp: Option[ControlPoint]): Unit = cp.map(showStatus)
  def showStatus(cp: ControlPoint): Unit = println(s"[$iter] ${cpInfo(cp)}")
  def cpInfo(cp: ControlPoint, detail: Boolean = false): String =
    sem.getString(cp, CYAN, detail)

  // handle when the static analysis is finished
  def finished: Unit = {
    printlnColor(CYAN)(s"* Static analysis finished. (# iter: $iter)")
    setCp(None)
    continue = false
    runDirect
  }

  // jline
  private val terminal: Terminal = TerminalBuilder.builder().build()
  private val reader: LineReader = LineReaderBuilder.builder()
    .terminal(terminal)
    .completer(completer)
    .build()
  private val prompt: String = LINE_SEP + s"${MAGENTA}analyzer>${RESET} "

  // show help message at the first time
  lazy val firstHelp: Unit = { CmdHelp.showHelp; println }

  // check whether skip REPL
  def isSkip(cp: ControlPoint): Boolean = jumpTo match {
    case _ if nextEntry => cp match {
      case NodePoint(_: Entry, View(Some(_), Nil, Nil, 0)) =>
        nextEntry = false; false
      case _ => true
    }
    case _ if untilMerged =>
      if (sem.worklist.isEmpty && !merged) true
      else { untilMerged = false; merged = false; false }
    case Some(targetIter) =>
      if (iter < targetIter) true
      else { jumpTo = None; false }
    case _ => continue && !isBreak(cp)
  }

  // run REPL
  def apply(transfer: AbsTransfer, cp: ControlPoint): Unit = try {
    if (!isSkip(cp)) {
      setCp(Some(cp))
      continue = false
      runDirect
    }
    transfer(cp)
  } catch {
    case e: JSAVERError =>
      printlnColor(RED)(s"* # iter: $iter")
      throw e
    case e: Throwable =>
      printlnColor(RED)(s"* unexpectedly terminated (# iter: $iter).")
      dumpCFG(sem, Some(cp), depth = Some(5))
      showStatus(cp)
      throw e
  }
  def runDirect: Unit = try {
    firstHelp
    showStatus(curCp)
    while ({
      reader.readLine(prompt) match {
        case null => stop
        case line => line.split("\\s+").toList match {
          case Nil | List("") =>
            continue = false
            false
          case name :: args => {
            Command.cmdMap.get(name) match {
              case Some(cmd) => cmd(this, curCp, args)
              case None =>
                println(s"The command `$name` does not exist. (Try `help`)")
            }
            !continue
          }
        }
      }
    }) {}
  } catch { case e: EndOfFileException => error("stop for debugging") }

  // original control point
  private var origCp: Option[ControlPoint] = None

  // current control point
  private var curCp: Option[ControlPoint] = None

  // set current control point
  def setCp(cpOpt: Option[ControlPoint]) = {
    origCp = cpOpt
    curCp = cpOpt
  }
  def moveCp(cp: ControlPoint) = curCp = Some(cp)
  def restoreCp() = curCp = origCp

  // continue option
  var continue: Boolean = false

  // jump point
  var jumpTo: Option[Int] = None

  // jump to the next JS entry
  var nextEntry: Boolean = false

  // jump to when the analysis result is merged
  var untilMerged: Boolean = false
  var merged: Boolean = false

  // break points
  val breakpoints = ArrayBuffer[(String, String)]()
  private def isBreak(cp: ControlPoint): Boolean = cp match {
    case NodePoint(node: Entry, _) => breakpoints.exists {
      case (CmdBreak.func, name) => name == cfg.funcOf(node).name
      case (CmdBreak.block, uid) => uid.toInt == node.uid
      case _ => false
    }
    case NodePoint(node, _) => breakpoints.exists {
      case (CmdBreak.block, uid) => uid.toInt == node.uid
      case _ => false
    }
    case _ => false
  }

  // stop
  def stop: Boolean = { breakpoints.clear(); continue = true; false }
}
