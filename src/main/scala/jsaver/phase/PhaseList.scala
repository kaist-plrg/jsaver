package jsaver.phase

import jsaver.JSAVERConfig
import jsaver.util.ArgParser

sealed abstract class PhaseList[Result] {
  def getRunner(
    parser: ArgParser
  ): JSAVERConfig => Result

  def >>[C <: Config, R](phase: Phase[Result, C, R]): PhaseList[R] = PhaseCons(this, phase)

  val nameList: List[String]
  override def toString: String = nameList.reverse.mkString(" >> ")
}

case object PhaseNil extends PhaseList[Unit] {
  def getRunner(
    parser: ArgParser
  ): JSAVERConfig => Unit = x => {}

  val nameList: List[String] = Nil
}

case class PhaseCons[P, C <: Config, R](
  prev: PhaseList[P],
  phase: Phase[P, C, R]
) extends PhaseList[R] {
  def getRunner(
    parser: ArgParser
  ): JSAVERConfig => R = {
    val prevRunner = prev.getRunner(parser)
    val phaseRunner = phase.getRunner(parser)
    jsaverConfig => phaseRunner(prevRunner(jsaverConfig), jsaverConfig)
  }

  val nameList: List[String] = phase.name :: prev.nameList
}

