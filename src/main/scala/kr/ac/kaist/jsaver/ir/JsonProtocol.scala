package kr.ac.kaist.jsaver.ir

import kr.ac.kaist.jsaver.ir.Parser._
import kr.ac.kaist.jsaver.util.BasicJsonProtocol
import kr.ac.kaist.jsaver.util.Useful.stringify
import io.circe._, io.circe.syntax._

object JsonProtocol extends BasicJsonProtocol {
  val stringifier = new Stringifier(line = true, asite = true)
  import stringifier._

  implicit val (tyDecoder: Decoder[Ty], tyEncoder: Encoder[Ty]) =
    stringCodec[Ty](Ty.apply, stringify)
  implicit val (refDecoder: Decoder[Ref], refEncoder: Encoder[Ref]) =
    stringCodec[Ref](Ref.apply, stringify)
  implicit val (exprDecoder: Decoder[Expr], exprEncoder: Encoder[Expr]) =
    stringCodec[Expr](Expr.apply, stringify)
  implicit val (instDecoder: Decoder[Inst], instEncoder: Encoder[Inst]) =
    stringCodec[Inst](Inst.apply, stringify)
}
