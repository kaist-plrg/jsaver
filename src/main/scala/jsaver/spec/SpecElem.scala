package jsaver.spec

import jsaver.util.Useful._
import jsaver.spec.Stringifier._

// specification components
trait SpecElem {
  // conversion to string
  override def toString: String = stringify(this)
}
