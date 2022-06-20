package jsaver.analyzer.domain

import jsaver.LINE_SEP
import jsaver.analyzer._
import jsaver.cfg._
import jsaver.ir._
import jsaver.js._
import jsaver.js.ast.AST
import jsaver.spec.algorithm.Algo
import jsaver.util.Useful._

// values used in analysis
sealed trait AValue {
  // conversion to string
  override def toString: String = this match {
    case AComp(AConst("noraml"), value, _) => s"N($value)"
    case AComp(ty, value, target) => s"C($ty, $value, $target)"
    case AConst(name) => s"~$name~"
    case NamedLoc(name) => s"#$name"
    case AllocSite(k, view) => s"#$k:$view"
    case SubMapLoc(baseLoc) => s"$baseLoc:SubMap"
    case AFunc(algo) => s"λ(${algo.name})"
    case AClo(params, locals, func) => (
      params.mkString("(", ", ", ")") +
      (for ((x, v) <- locals) yield s"$x -> $v").mkString("[", ", ", "]") +
      s" => ${func.uidString}"
    )
    case ACont(pararms, locals, target) =>
      s"${pararms.mkString("(", ", ", ")")} [=>] $target"
    case AAst(ast) =>
      val max = AValue.AST_MAX_LENGTH
      var str = ast.toString
      if (str.length > max) str = str.substring(0, max - 3) + "..."
      f"☊[${ast.kind}]($str) @ 0x${ast.hashCode}%08x"
    case ASimple(simple) => simple.toString
  }
}
object AValue {
  val AST_MAX_LENGTH = 10

  // from original concrete values
  def from(value: Value): AValue = value match {
    case CompValue(Const(name), value, targetOpt) => AComp(
      AConst(name),
      from(value),
      targetOpt.fold[AValue](AConst("empty"))(str => ASimple(Str(str)))
    )
    case Const(name) => AConst(name)
    case addr: Addr => Loc.from(addr)
    case Func(algo) => AFunc(algo)
    case ASTVal(ast) => AAst(ast)
    case simple: SimpleValue => ASimple(simple)
    case _ => error(s"impossible to convert to AValue: $value")
  }
}

// completions
case class AComp(ty: AConst, value: AValue, target: AValue) extends AValue

// constants
case class AConst(name: String) extends AValue

// abstract locations for addresses
sealed trait Loc extends AValue {
  // check named locations
  def isNamed: Boolean = this match {
    case NamedLoc(_) | SubMapLoc(NamedLoc(_)) => true
    case _ => false
  }

  // get base locations
  def base: BaseLoc = this match {
    case base: BaseLoc => base
    case SubMapLoc(base) => base
  }
}
object Loc {
  // from original concrete addresses
  private val subMapPattern = "(.+).SubMap".r
  def from(addr: Addr): Loc = addr match {
    case NamedAddr(name) => name match {
      case subMapPattern(base) => SubMapLoc(NamedLoc(base))
      case name => NamedLoc(name)
    }
    case _ => error(s"impossible to convert to Loc: $addr")
  }
}
sealed trait BaseLoc extends Loc
case class NamedLoc(name: String) extends BaseLoc
case class AllocSite(k: Int, view: View) extends BaseLoc
case class SubMapLoc(baseLoc: BaseLoc) extends Loc

// functions
case class AFunc(algo: Algo) extends AValue

// closures
case class AClo(
  params: List[Id],
  locals: Map[Id, AbsValue],
  func: Function
) extends AValue

// continuations
case class ACont(
  params: List[Id],
  locals: Map[Id, AbsValue],
  target: NodePoint[Node]
) extends AValue

// AST values
case class AAst(ast: AST) extends AValue

// simple values
case class ASimple(value: SimpleValue) extends AValue
