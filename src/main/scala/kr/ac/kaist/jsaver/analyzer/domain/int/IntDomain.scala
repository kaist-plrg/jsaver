package kr.ac.kaist.jsaver.analyzer.domain

import kr.ac.kaist.jsaver.ir._

trait IntDomain extends Domain {
  // integer operators
  implicit def ElemOp(elem: Elem): IntOp
  trait IntOp {
    def plus(that: Elem): Elem
    def mul(that: Elem): Elem
  }
}
