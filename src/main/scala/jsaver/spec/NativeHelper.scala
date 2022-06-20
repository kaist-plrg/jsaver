package jsaver.spec

import jsaver._
import jsaver.spec.JsonProtocol._
import jsaver.spec.algorithm._
import jsaver.spec.grammar._
import jsaver.util.JvmUseful._

object NativeHelper {
  // dump ECMAScript to directory
  def dumpSpec(spec: ECMAScript, dirname: String): Unit = {
    val ECMAScript(version, grammar, algos, intrinsics, symbols, aoids, section) = spec

    mkdir(dirname)
    dumpFile(version, s"$dirname/version")
    dumpFile(grammar, s"$dirname/grammar")
    mkdir(s"$dirname/algorithm")
    for (algo <- algos) dumpFile(algo, s"$dirname/algorithm/${algo.name}.algo")
    dumpFile(intrinsics.toList.sorted.mkString(LINE_SEP), s"$dirname/intrinsics")
    dumpFile(symbols.toList.sorted.mkString(LINE_SEP), s"$dirname/symbols")
    dumpFile(aoids.toList.sorted.mkString(LINE_SEP), s"$dirname/aoids")
    dumpFile(section, s"$dirname/section")
  }

  // load ECMAScript from filename
  def loadSpec(filename: String): ECMAScript = {
    if (jsonFilter(filename)) readJson[ECMAScript](filename)
    else {
      val dirname = filename
      ECMAScript(
        version = readFile(s"$dirname/version"),
        grammar = Grammar.fromFile(s"$dirname/grammar"),
        algos = (for {
          file <- walkTree(s"$dirname/algorithm")
          filename = file.getName
          if algoFilter(filename)
          name = file.toString
        } yield Algo.fromFile(name)).toList.sortBy(_.name),
        intrinsics = readFile(s"$dirname/intrinsics").split(LINE_SEP).toSet,
        symbols = readFile(s"$dirname/symbols").split(LINE_SEP).toSet,
        aoids = readFile(s"$dirname/aoids").split(LINE_SEP).toSet,
        section = Section.fromFile(s"$dirname/section"),
      )
    }
  }
}
