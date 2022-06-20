package jsaver.generator

import jsaver._
import jsaver.spec.JsonProtocol._
import jsaver.spec.NativeHelper._
import jsaver.spec._
import jsaver.spec.grammar.Grammar
import jsaver.util.JvmUseful._
import jsaver.util.Useful._

case class ModelGenerator(spec: ECMAScript, parser: Boolean) {
  val grammar = spec.grammar

  // generate model/VERSION in resource directory
  dumpSpec(spec, s"$VERSION_DIR/generated")

  // generate js/ast/*.scala in source code directory
  ASTGenerator(grammar)

  // generate js/Parser.scala in source code directory
  if (parser) ParserGenerator(grammar)

  // generate js/ASTWalker.scala in source code directory
  WalkerGenerator(grammar)

  // generate js/ASTDiff.scala in source code directory
  DiffGenerator(grammar)
}
