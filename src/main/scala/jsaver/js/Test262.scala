package jsaver.js

import jsaver._
import jsaver.error.NotSupported
import jsaver.js.ast._
import jsaver.phase.FilterMeta
import jsaver.util._
import jsaver.util.Useful._
import jsaver.util.JvmUseful._

object Test262 {
  // parsing result
  type ParseResult = Either[String, List[StatementListItem]]

  // cache for parsing results for necessary harness files
  val getInclude = cached[String, ParseResult](name => try {
    val filename = s"$TEST262_DIR/harness/$name"
    val script = parseFile(filename)
    Right(flattenStmt(script))
  } catch {
    case NotSupported(msg) => Left(msg)
  })

  // parse JavaScript file
  def parseFile(filename: String): Script =
    Parser.parse(Parser.Script(Nil), fileReader(filename)).get

  // test262 test configuration
  lazy val config = FilterMeta.test262configSummary

  // basic statements
  lazy val basicStmts = for {
    x <- getInclude("assert.js")
    y <- getInclude("sta.js")
  } yield x ++ y
}
