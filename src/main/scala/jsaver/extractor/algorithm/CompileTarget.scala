package jsaver.extractor.algorithm

import jsaver.ir
import jsaver.spec.algorithm.token.{ Tokens, Token }
import jsaver.spec.grammar.Grammar
import jsaver.util.Useful._
import org.jsoup.nodes.Document

class CompileTargets(val version: String, secIds: Map[String, String]) {
  val compiler = Compiler(version, secIds)
  import compiler._

  val targets = List(
    InstsTarget, InstTarget, ExprTarget,
    ValTarget, CondTarget, TyTarget, RefTarget
  )

  val options = targets.map(t => "-" + t.name -> t).toMap

  object CompileTarget {
    def unapply(str: String): Option[CompileTarget] = options.get(str)
  }

  sealed abstract class CompileTarget(
    val name: String,
    val parser: Parser[ir.IRElem]
  ) {
    // parse input
    def parse(
      code: List[String],
      raw: Boolean = true
    )(implicit grammar: Grammar, document: Document): (List[Token], ParseResult[ir.IRElem]) = {
      // get tokens
      val tokens = if (raw) {
        // from raw string
        if (this eq InstsTarget) TokenParser.getTokens(code)
        else TokenParser.getTokens(code.mkString(" "), handleIndent = false)
      } else {
        Tokens(code.mkString(" "))
      }
      (tokens, compiler.parseAll(parser, tokens))
    }

    def parseIR(str: String): ir.IRElem = this match {
      case TyTarget => ir.Ty(str)
      case _ => ir.Inst(str)
    }
  }
  case object InstsTarget extends CompileTarget("insts", normalizedStmts)
  case object InstTarget extends CompileTarget("inst", stmt)
  case object ExprTarget extends CompileTarget("expr", expr2inst(expr))
  case object ValTarget extends CompileTarget("value", valueParser)
  case object CondTarget extends CompileTarget("cond", expr2inst(_cond))
  case object TyTarget extends CompileTarget("ty", ty)
  case object RefTarget extends CompileTarget("ref", ref2inst(ref))
}

object CompileTargets {
  private var versionMap: Map[String, CompileTargets] = Map()
  def apply(version: String, secIds: Map[String, String]): CompileTargets = versionMap.getOrElse(version, {
    val target = new CompileTargets(version, secIds)
    versionMap += version -> target
    target
  })
}
