package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.ir._

trait StrDomain extends Domain {
  // element
  type Elem <: ElemTrait

  // top element
  val Top: Elem

  // abstraction functions
  def apply(elems: Str*): Elem
  def apply(elems: Iterable[Str]): Elem

  // element traits
  trait ElemTrait extends Iterable[Str] with super.ElemTrait { this: Elem =>
    def ⊓(that: Elem): Elem
    def getSingle: Flat[Str]
    def plus(that: Elem): Elem
    def plusNum(that: AbsNum): Elem
    def contains(elem: Str): Boolean
  }
}
