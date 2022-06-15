package kr.ac.kaist.jsaver.extractor.algorithm

import scala.util.parsing.combinator._

// common parsers
trait Parsers extends RegexParsers {
  lazy val word = "\\w+".r
}
