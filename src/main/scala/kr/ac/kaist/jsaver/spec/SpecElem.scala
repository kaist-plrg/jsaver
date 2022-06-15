package kr.ac.kaist.jsaver.spec

import kr.ac.kaist.jsaver.util.Useful._
import kr.ac.kaist.jsaver.spec.Stringifier._

// specification components
trait SpecElem {
  // conversion to string
  override def toString: String = stringify(this)
}
