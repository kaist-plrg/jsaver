package jsaver.extractor.grammar

import jsaver.spec.grammar._
import jsaver.util.Useful._

// Production parsers
object ProductionParser extends ProductionParsers {
  def apply(lines: List[String]): Production = lines match {
    case lhsStr :: rhsStrList => {
      val lhs ~ split ~ rhsOpt = parseAll(lhsLine, lhsStr).get
      // create rhsList
      var rhsList = rhsStrList.map(s => parseAll(rhs, s).get)
      rhsOpt.map(rhsList ::= _)
      // handle `one of`
      if (split) rhsList = rhsList.flatMap {
        case Rhs(tokens, cond) => tokens.map(t => Rhs(List(t), cond))
      }
      Production(lhs, rhsList)
    }
    case Nil => ??? // impossible
  }
}
trait ProductionParsers extends LhsParsers with RhsParsers {
  lazy val oneof: Parser[Boolean] = opt("one of") ^^ { !_.isEmpty }
  lazy val lhsLine = lhs ~ oneof ~ opt(rhs)
}
