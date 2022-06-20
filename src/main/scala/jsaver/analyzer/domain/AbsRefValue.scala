package jsaver.analyzer.domain

import jsaver.analyzer.AnalyzerElem
import jsaver.ir._

// basic abstract reference values
sealed trait AbsRefValue extends AnalyzerElem
case class AbsRefId(id: Id) extends AbsRefValue
case class AbsRefProp(base: AbsValue, prop: AbsValue) extends AbsRefValue
