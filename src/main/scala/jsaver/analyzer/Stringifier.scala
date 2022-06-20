package jsaver.analyzer

import jsaver.analyzer.domain._
import jsaver.LINE_SEP
import jsaver.cfg
import jsaver.cfg.{ Stringifier => _, _ }
import jsaver.js.ast.AST
import jsaver.util.Appender
import jsaver.util.Appender._
import jsaver.util.Useful._

// Analyzer Stringifier
class Stringifier(
  detail: Boolean = true,
  line: Boolean = false,
  asite: Boolean = false
) {
  // load other stringifiers
  val cfgStringifier = new cfg.Stringifier(detail, line, asite)
  import cfgStringifier._, irStringifier._

  // analyzer components
  implicit lazy val AnalyzerElemApp: App[AnalyzerElem] = (app, comp) => comp match {
    case comp: ControlPoint => ControlPointApp(app, comp)
    case comp: View => ViewApp(app, comp)
    case comp: AbsRefValue => AbsRefValueApp(app, comp)
  }

  // control points
  implicit lazy val ControlPointApp: App[ControlPoint] = (app, cp) => cp match {
    case NodePoint(node, view) => app >> view >> ":" >> node
    case ReturnPoint(func, view) => app >> view >> ":RET:" >> func.uidString
  }

  // views
  implicit lazy val ViewApp: App[View] = (app, view) => {
    def ctxtStr(
      calls: List[String],
      loops: List[LoopCtxt]
    ): Appender = if (detail) {
      app >> calls.mkString("<call: ", ", ", ">")
      app >> loops.map(_ match {
        case LoopCtxt(loop, depth) => s"${loop.uidString}($depth)"
      }).mkString("<loop: ", ", ", ">")
    } else {
      app >> "<call: " >> calls.length >> ">"
      app >> "<loop: " >> loops.length >> ">"
    }

    // js views
    view.jsViewOpt.map {
      case JSView(ast, calls, loops) =>
        app >> s"☊[${ast.span}]"
        ctxtStr(calls.map(call => s"☊[${call.span}]"), loops)
    }

    // ir contexts
    ctxtStr(view.calls.map(_.uidString), view.loops)
  }

  // abstract reference values
  implicit lazy val AbsRefValueApp: App[AbsRefValue] = (app, ref) => ref match {
    case AbsRefId(id) => app >> id
    case AbsRefProp(base, prop) => app >> base >> "[" >> prop >> "]"
  }
}
