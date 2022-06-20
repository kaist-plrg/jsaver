package jsaver.ir

import jsaver.util.WeakUId

// IR Instructions
sealed trait Inst extends IRElem with WeakUId {
  // line information
  var line: Option[Int] = None
  def setLine(k: Option[Int]): Unit = line match {
    case None => line = k
    case _ =>
  }

  // complete check (not containing ???)
  lazy val isComplete: Boolean = {
    val checker = new CompleteChecker
    checker.walk(this)
    checker.complete
  }
}
object Insts extends Parser[List[Inst]]
object Inst extends Parser[Inst] {
}

// conditional instructions
sealed trait CondInst extends Inst { val cond: Expr }
case class IIf(cond: Expr, thenInst: Inst, elseInst: Inst) extends CondInst
case class IWhile(cond: Expr, body: Inst) extends CondInst

// call instructions
sealed trait CallInst extends Inst { val id: Id }
case class IApp(id: Id, fexpr: Expr, args: List[Expr]) extends CallInst
case class IAccess(id: Id, bexpr: Expr, expr: Expr, args: List[Expr]) extends CallInst with AllocSite

// normal instructions
sealed trait NormalInst extends Inst
case class IExpr(expr: Expr) extends NormalInst
case class ILet(id: Id, expr: Expr) extends NormalInst
case class IAssign(ref: Ref, expr: Expr) extends NormalInst
case class IDelete(ref: Ref) extends NormalInst
case class IAppend(expr: Expr, list: Expr) extends NormalInst
case class IPrepend(expr: Expr, list: Expr) extends NormalInst
case class IReturn(expr: Expr) extends NormalInst
case class IThrow(name: String) extends NormalInst with AllocSite
case class IAssert(expr: Expr) extends NormalInst
case class IPrint(expr: Expr) extends NormalInst

// arrow instructions for closures and continuations
sealed trait ArrowInst extends Inst {
  val id: Id
  val params: List[Id]
  val body: Inst
  def isContinuation: Boolean = this match {
    case _: IClo => false
    case _: ICont | _: IWithCont => true
  }
}
case class IClo(id: Id, params: List[Id], captured: List[Id], body: Inst) extends ArrowInst
case class ICont(id: Id, params: List[Id], body: Inst) extends ArrowInst
case class IWithCont(id: Id, params: List[Id], body: Inst) extends ArrowInst

// sequence instructions
case class ISeq(insts: List[Inst]) extends Inst
