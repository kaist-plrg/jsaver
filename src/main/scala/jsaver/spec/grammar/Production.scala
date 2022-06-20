package jsaver.spec.grammar

import jsaver.LINE_SEP
import jsaver.spec.{ Parser, SpecElem }
import jsaver.util.Useful._

// ECMAScript grammar productions
case class Production(
  lhs: Lhs,
  rhsList: List[Rhs]
) extends SpecElem {
  // get name
  def name: String = lhs.name

  // get nonterminal names in rhs of lhs
  def getRhsNT: Set[String] = rhsList.flatMap(_.toNTs).map(_.name).toSet

  // get index map
  def getIdxMap: Map[String, (Int, Int)] = (for {
    (rhs, i) <- rhsList.zipWithIndex
    (name, j) <- rhs.allNames.zipWithIndex
  } yield lhs.name + ":" + name -> (i, j)).toMap
}
object Production extends Parser[Production]
