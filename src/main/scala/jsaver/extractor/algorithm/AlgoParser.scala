package jsaver.extractor.algorithm

import jsaver.ir._
import jsaver.LINE_SEP
import jsaver.spec.{ ECMAScript, Region }
import jsaver.spec.algorithm._
import jsaver.spec.grammar.Grammar
import jsaver.spec.grammar.token.{ NonTerminal, Terminal }
import jsaver.util.JvmUseful._
import jsaver.util.Useful._
import org.jsoup.nodes._

object AlgoParser {
  // get algorithms
  def apply(
    version: String,
    parsedHead: (Element, List[Head]),
    secIds: Map[String, String],
    detail: Boolean
  )(
    implicit
    lines: Array[String],
    grammar: Grammar,
    region: Region,
    document: Document
  ): List[Algo] = {
    val (elem, heads) = parsedHead
    val id: String = getId(elem)
    val result: List[Algo] = try {
      val (start, end) = getRange(elem).get
      // get code
      var code = getRawBody(elem)
      val rawBody = getBody(version, code, secIds, start)
      heads.map(head => Algo(head, id, handleRetCont(rawBody, head), code))
    } catch {
      case e: Throwable => Nil
    }
    result
  }

  // get algorithms from codes
  def getBody(
    version: String,
    code: Array[String],
    secIds: Map[String, String],
    start: Int
  )(
    implicit
    lines: Array[String],
    grammar: Grammar,
    region: Region,
    document: Document
  ): Inst = {
    // get tokens
    val tokens = TokenParser.getTokens(code)

    // get body
    val rawBody = Compiler(version, secIds)(tokens, start)

    // handle special return for continuation
    rawBody
  }

  // handle special return for continuation
  def handleRetCont(inst: Inst, head: Head): Inst = head.name match {
    case x if retContStartNames contains x => RetContWalker.walk(inst)
    case _ => inst
  }
  private val retContStartNames = Set("GeneratorStart", "AsyncGeneratorStart", "AsyncFunctionStart")
  private object RetContWalker extends Walker {
    var inCont = false
    override def walk(inst: Inst): Inst = inst match {
      case (_: ICont) =>
        inCont = true; val res = super.walk(inst); inCont = false; res
      case IReturn(expr) if inCont => {
        val i = IApp(Id("_"), Expr("RET_CONT"), List(expr))
        i.line = inst.line
        i
      }
      case _ => super.walk(inst)
    }
  }

  // get container id
  def getId(elem: Element): String = {
    if (elem.id != "") elem.id
    else if (elem.parent == null) ""
    else getId(elem.parent)
  }

  // get ancestor ids
  def getIds(elem: Element): List[String] = {
    val ids =
      if (elem.parent == null) Nil
      else getIds(elem.parent)
    if (elem.id == "") ids
    else elem.id :: ids
  }
}
