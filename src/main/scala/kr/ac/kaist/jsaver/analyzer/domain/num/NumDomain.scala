package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.ir._

trait NumDomain extends Domain {
  // get intervals
  def getInterval(from: Double, to: Double): Elem

  // element
  type Elem <: ElemTrait

  // top element
  val Top: Elem

  // abstraction functions
  def apply(elems: Num*): Elem
  def apply(elems: Iterable[Num]): Elem

  // element traits
  trait ElemTrait extends Iterable[Num] with super.ElemTrait { this: Elem =>
    def ⊓(that: Elem): Elem
    def getSingle: Flat[Num]
    def plus(that: Elem): Elem
    def plusInt(that: AbsInt): Elem
    def mul(that: Elem): Elem
    def mulInt(that: AbsInt): Elem
  }
}
