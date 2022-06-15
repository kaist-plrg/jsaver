package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.analyzer.AnalyzerElem
import kr.ac.kaist.jsaver.ir._

// basic abstract reference values
sealed trait AbsRefValue extends AnalyzerElem
case class AbsRefId(id: Id) extends AbsRefValue
case class AbsRefProp(base: AbsValue, prop: AbsValue) extends AbsRefValue
