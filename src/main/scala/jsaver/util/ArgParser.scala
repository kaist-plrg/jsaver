package jsaver.util

import scala.util.parsing.combinator._
import scala.io.Source
import jsaver.{ JSAVER, Command, JSAVERConfig }
import jsaver.phase.{ PhaseOption, Config }
import jsaver.error._
import io.circe._, io.circe.syntax._, io.circe.parser.{ parse => parseJson }

// Argument parser by using Scala RegexParsers.
class ArgParser(cmd: Command[_], jsaverConfig: JSAVERConfig) extends RegexParsers {
  var ruleList: List[Parser[Unit]] = Nil

  var optNameSet: Set[String] = Set()

  addRule(jsaverConfig, "", JSAVER.options)

  def addRule[PhaseConfig <: Config](
    config: PhaseConfig,
    prefix: String,
    options: List[PhaseOption[PhaseConfig]]
  ): Unit = {
    options.foreach {
      case (opt, kind, _) =>
        val optName = prefix + (if (prefix == "") "" else ":") + opt
        optNameSet(optName) match {
          case true => throw OptAlreadyExistError(optName)
          case false =>
            optNameSet += optName
            kind.argRegexList(optName).reverseIterator.foreach {
              case (optRegex, argRegex, fun) =>
                val cur: Parser[Unit] = (optRegex) ~> (argRegex) ^^ { fun(config, _) }
                ruleList ::= cur
            }
        }
    }
  }

  // Parsing arguments.
  def apply(args: List[String]): Unit = {
    var jsonArgs: List[String] = Nil
    val str = ".*".r ^^ { s => s }

    // add arguments from JSON
    def addArg(prefix: String, value: (String, Json)): Unit = value match {
      case (opt, Json.True) => jsonArgs ::= s"-$prefix$opt"
      case (opt, Json.False) =>
      case (opt, num) if num.isNumber => jsonArgs ::= s"-$prefix$opt=${num.asNumber.get}"
      case (opt, str) if str.isString && !str.asString.get.isEmpty =>
        jsonArgs ::= s"-$prefix$opt=${str.asString.get}"
      // TODO case (opt, JsArray(lst)) =>
      case (opt, jsValue) => NoSupportError(jsValue.toString)
    }

    // setting options using a JSON file.
    lazy val json: Parser[Unit] = ("-config=" ~> str) ^^ {
      case fileName => {
        parseJson(Source.fromFile(fileName)("UTF-8").mkString) match {
          case Left(err) => throw err
          case Right(json) => json match {
            case obj if json.isObject => obj.asObject.get.toList.foreach {
              case (phase, value) if value.isObject => {
                if (JSAVER.phases.map(_.name).contains(phase))
                  value.asObject.get.toList.foreach(addArg(s"$phase:", _))
                else throw NoPhaseError(phase)
              }
              case ("file", lst) if json.isArray => lst.asArray.get.foreach {
                case fileName if json.isString => jsonArgs ::= fileName.asString.get
                case value => throw NoFileName(value.toString)
              }
              case ("file", value) => throw NoFileList(value.toString)
              case pair => addArg("", pair)
            }
            case value => throw NoObjError(value.toString)
          }
        }
      }
    }

    // no option error
    lazy val optError: Parser[Unit] = ("-" ~> "[^=]+".r <~ "=") ~ str ^^ {
      case o ~ s => throw NoOptError(o, cmd)
    }
    lazy val simpleOptError: Parser[Unit] = ("-" ~> str) ^^ {
      o => throw NoOptError(o, cmd)
    }

    // a filename list
    lazy val fileName: Parser[Unit] = str ^^ {
      s => jsaverConfig.args = s :: jsaverConfig.args
    }

    // Generate a parser.
    val parser: Parser[Unit] = phrase(json) | ruleList.foldRight(
      phrase(optError) | phrase(simpleOptError) | phrase(fileName)
    ) { case (rule, prev) => phrase(rule) | prev }

    args.foreach(arg => {
      parse(parser, arg).get
      jsonArgs.foreach(parse(parser, _).get)
      jsonArgs = Nil
    })

    jsaverConfig.args = jsaverConfig.args.reverse
  }
}
