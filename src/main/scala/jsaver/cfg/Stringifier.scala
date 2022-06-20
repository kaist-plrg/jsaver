package jsaver.cfg

import jsaver.LINE_SEP
import jsaver.util.Appender
import jsaver.util.Appender._
import jsaver.util.Useful._
import jsaver.ir._

// CFG Stringifier
class Stringifier(
  detail: Boolean = true,
  line: Boolean = false,
  asite: Boolean = false
) {
  // load IR Stringifier
  val irStringifier = IRElem.getStringifier((detail, line, asite))
  import irStringifier._

  // CFG elements
  implicit lazy val CFGElemApp: App[CFGElem] = (app, elem) => elem match {
    case cfg: CFG => CFGApp(app, cfg)
    case func: Function => FunctionApp(app, func)
    case origin: Origin => OriginApp(app, origin)
    case node: Node => NodeApp(app, node)
  }

  // CFGs
  implicit lazy val CFGApp: App[CFG] = (app, cfg) => app

  // CFG functions
  implicit lazy val FunctionApp: App[Function] =
    (app, func) => app >> func.uidString >> ":" >> func.name

  // CFG origins
  implicit lazy val OriginApp: App[Origin] = (app, origin) => app

  // CFG nodes
  implicit lazy val NodeApp: App[Node] = (app, node) => {
    app >> node.uidString
    node match {
      case Entry(_) =>
      case Normal(_, inst) => app >> " " >> inst
      case Call(_, inst) => app >> " " >> inst
      case Arrow(_, inst, fid) => app >> " " >> inst >> " [fid: " >> fid >> "]"
      case Branch(_, inst) => app >> " " >> inst.cond
      case LoopCont(_) =>
      case Exit(_) =>
    }
    app
  }
}
