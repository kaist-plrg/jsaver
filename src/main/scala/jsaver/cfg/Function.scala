package jsaver.cfg

import jsaver.ir.Inst
import jsaver.spec.algorithm.{ Algo, Head, Param }
import jsaver.util.{ Appender, UId, UIdGen }

// CFG functions
case class Function(
  uidGen: UIdGen[Function],
  origin: Origin,
  entry: Entry,
  exit: Exit,
  nodes: Set[Node],
  nexts: Map[Linear, Node],
  branches: Map[Branch, (Node, Node)],
  complete: Boolean
) extends CFGElem with UId[Function] { func =>
  // optionally get algorithm
  def algoOption: Option[Algo] = origin match {
    case AlgoOrigin(algo) => Some(algo)
    case _ => None
  }

  // optionally get algorithm head
  def headOption: Option[Head] = algoOption.map(_.head)

  // function name
  lazy val name: String = origin.name

  // function name
  lazy val params: List[Param] = origin.params

  // body instruction
  lazy val body: Inst = origin.body

  // conversion to DOT
  lazy val toDot: String = (new DotPrinter {
    def getId(func: Function): String = s"cluster${func.uid}"
    def getId(node: Node): String = s"node${node.uid}"
    def getName(func: Function): String = func.toString
    def getColor(node: Node): String = REACH
    def getColor(from: Node, to: Node): String = REACH
    def getBgColor(node: Node): String = NORMAL
    def apply(app: Appender): Unit = addFunc(func, app)
  }).toString
}
