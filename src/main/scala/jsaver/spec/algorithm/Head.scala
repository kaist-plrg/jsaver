package jsaver.spec.algorithm

import jsaver.TRIPLE
import jsaver.ir
import jsaver.spec.{ Parser, SpecElem }
import jsaver.spec.algorithm.Param.Kind._
import jsaver.spec.grammar._
import jsaver.spec.grammar.token.NonTerminal
import jsaver.spec.{ ECMAScript, Region }
import jsaver.util.Useful._
import org.jsoup.nodes._

trait Head extends SpecElem {
  // name
  def name: String = this match {
    case NormalHead(name, _) =>
      name
    case MethodHead(base, methodName, _, _) =>
      s"$base.$methodName"
    case SyntaxDirectedHead(lhsName, idx, subIdx, _, methodName, _, _, _) =>
      s"$lhsName[$idx,$subIdx].$methodName"
    case BuiltinHead(ref, origParams) =>
      s"GLOBAL.$ref"
  }

  // parameters
  def params: List[Param] = this match {
    case NormalHead(_, params) =>
      params
    case MethodHead(_, _, receiverParam, origParams) =>
      receiverParam :: origParams
    case SyntaxDirectedHead(_, _, _, rhsParams, _, _, withParams, _) =>
      Param(THIS_PARAM) :: (rhsParams ++ withParams)
    case BuiltinHead(ref, origParams) =>
      List(THIS_PARAM, ARGS_LIST, NEW_TARGET).map(Param(_))
  }

  // check builtin
  def isBuiltin: Boolean = this match {
    case _: BuiltinHead => true
    case _ => false
  }
}
object Head extends Parser[Head] {
  // get names and parameters
  val paramPattern = "[^\\s,()\\[\\]]+".r
  val rulePattern = ".*(Statement|Expression)\\s*Rules".r
  val namePattern = "[.:a-zA-Z0-9%\\[\\]@ /`_-]+".r
  val semanticsPattern = ".*(Static|Runtime) Semantics:(.*)".r
  val withParamPattern = "_\\w+_".r
  val optionalParamPattern = "optional parameter(s?).*".r
  val restParamPattern = "rest parameter(s?).*".r
  val normPattern = "[\\s|-]".r
  val thisValuePattern = "this\\w+Value".r
  val letEnvRecPattern = "1. Let ([_\\w]+) be the \\w+ Environment Record.*".r
  val letObjPattern = "1. Let ([_\\w]+) be the \\w+ object\\.".r
  val methodDescPattern = """(?:The|When the)[\s\w\[\]]+method (?:of|for)[\s\w-]+,? (_\w+_),? (?:takes (?:no )?arguments?|is called|that was created|which was created).*""".r
}

// normal algorithm heads
case class NormalHead(
  override val name: String,
  override val params: List[Param]
) extends Head

// method algorithm heads
case class MethodHead(
  base: String,
  methodName: String,
  receiverParam: Param,
  origParams: List[Param]
) extends Head {
  // check if step is let ~ `this` step in internal method algorithms
  def isLetThisStep(code: Iterable[String]): Boolean = code.headOption match {
    case Some(head) =>
      val step = head.trim
      Head.letEnvRecPattern.matches(step) ||
        Head.letObjPattern.matches(step)
    case _ => false
  }
}

// syntax-directed algorithm heads
case class SyntaxDirectedHead(
  lhsName: String,
  idx: Int,
  subIdx: Int,
  rhsParams: List[Param],
  methodName: String,
  isStatic: Boolean,
  withParams: List[Param],
  needPrefix: Boolean
) extends Head

// built-in algorithm heads
case class BuiltinHead(
  ref: ir.Ref,
  origParams: List[Param]
) extends Head
