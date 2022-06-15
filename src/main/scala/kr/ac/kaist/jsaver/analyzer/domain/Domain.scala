package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.util.Appender
import kr.ac.kaist.jsaver.util.Appender._
import kr.ac.kaist.jsaver.util.Useful._

// domain
trait Domain {
  // bottom element
  val Bot: Elem

  // element
  type Elem <: ElemTrait

  // appender
  implicit val app: App[Elem]

  // element traits
  trait ElemTrait { this: Elem =>
    // partial order
    def ⊑(that: Elem): Boolean

    // join operator
    def ⊔(that: Elem): Elem

    // not partial order
    def !⊑(that: Elem): Boolean = !(this ⊑ that)

    // bottom check
    def isBottom: Boolean = this == Bot

    // conversion to string
    override def toString: String = stringify(this)
  }
}
