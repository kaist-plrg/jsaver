package jsaver.analyzer.domain

import jsaver.ir._

trait NumDomain extends Domain {
  // get intervals
  def getInterval(from: Double, to: Double): Elem

  // number operators
  implicit def ElemOp(elem: Elem): NumOp
  trait NumOp {
    def plus(that: Elem): Elem
    def plusInt(that: AbsInt): Elem
    def mul(that: Elem): Elem
    def mulInt(that: AbsInt): Elem
  }
}
