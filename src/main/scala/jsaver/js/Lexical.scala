package jsaver.js.ast

import jsaver.spec.algorithm._
import jsaver.ir._
import jsaver.error.InvalidAST
import jsaver.spec.grammar._
import jsaver.util.{ Span, Pos }
import jsaver.util.Useful._
import io.circe._, io.circe.syntax._

object Lexical {
  def apply(data: Json): Lexical = AST(data) match {
    case Some(compressed) => Lexical(compressed)
    case None => error("invalid AST compressed form")
  }
  def apply(data: AST.Compressed): Lexical = {
    val AST.LexicalCompressed(kind, str) = data
    Lexical(kind, str)
  }
}

case class Lexical(kind: String, str: String) extends AST {
  def idx: Int = 0
  def k: Int = 0
  def parserParams: List[Boolean] = Nil
  def span: Span = Span()
  def fullList: List[(String, PureValue)] = Nil
  def maxK: Int = 0

  // name
  override def name: String = kind

  // pretty printer
  override def prettify: Json = toJson

  // to JSON format
  override def toJson: Json = Json.arr(
    Json.fromString(kind),
    Json.fromString(str),
  )

  // conversion to string
  override def toString: String = str
}
