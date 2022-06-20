package jsaver.spec.algorithm

import jsaver.ir._
import jsaver.spec.{ Parser, SpecElem }
import jsaver.spec.grammar.Grammar
import jsaver.util.Useful._

case class Param(
  name: String,
  kind: Param.Kind = Param.Kind.Normal
) extends SpecElem {
  import Param.Kind._
  def isOptional: Boolean = kind == Optional
  def toOptional: Param = Param(name, Optional)
}
object Param extends Parser[Param] {
  type Kind = Kind.Value
  object Kind extends Enumeration {
    val Normal, Optional, Variadic = Value
  }

  def fromGrammar(
    grammar: Grammar,
    lhsName: String,
    idx: Int
  ): List[Param] = {
    val prod = grammar.nameMap(lhsName)
    val rhs = prod.rhsList(idx)
    val names = rhs.getNTs.map(_.name)
    val duplicated = names.filter(p => names.count(_ == p) > 1).toSet
    var counter = Map[String, Int]()
    val paramNames = names.map(name => {
      if (duplicated contains name) {
        val k = counter.getOrElse(name, 0)
        counter += name -> (k + 1)
        s"$name$k"
      } else name
    })
    paramNames.map(Param(_))
  }
}
