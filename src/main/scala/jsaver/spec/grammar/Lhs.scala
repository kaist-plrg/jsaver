package jsaver.spec.grammar

import jsaver.spec.{ Parser, SpecElem }

// ECMAScript grammar left-hand-sides
case class Lhs(
  name: String,
  params: List[String]
) extends SpecElem {
  def isModule: Boolean = Grammar.isModuleNT(name)
  def isSupplemental: Boolean = Grammar.isSupplementalNT(name)
  def isTarget: Boolean = Grammar.isTargetNT(name)
  def isScript: Boolean = name == "Script"
}
object Lhs extends Parser[Lhs]
