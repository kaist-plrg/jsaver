package jsaver.util

import java.io.{ Reader, File, PrintWriter }
import java.nio.file.{ Files, StandardCopyOption }
import jsaver._
import jsaver.error._
import org.apache.commons.text.StringEscapeUtils
import org.jsoup._
import org.jsoup.nodes._
import org.jsoup.select._
import scala.collection.mutable
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent._
import scala.concurrent.duration._
import scala.io.Source
import scala.sys.process._
import io.circe._, io.circe.syntax._, io.circe.parser._

object JvmUseful {
  import Useful._
  val ENC = "utf8"

  // file reader
  def fileReader(filename: String): Reader =
    Source.fromFile(filename, ENC).bufferedReader

  // walk directory
  def walkTree(filename: String): Iterable[File] = walkTree(new File(filename))
  def walkTree(file: File): Iterable[File] = {
    val children = new Iterable[File] {
      def iterator: Iterator[File] =
        if (file.isDirectory) file.listFiles.iterator
        else Iterator.empty
    }
    Seq(file) ++ children.flatMap(walkTree(_))
  }

  // extension filter
  def extFilter(ext: String): String => Boolean = _.endsWith(s".$ext")
  lazy val irFilter = extFilter("ir")
  lazy val jsFilter = extFilter("js")
  lazy val specFilter = extFilter("spec")
  lazy val jsonFilter = extFilter("json")
  lazy val scalaFilter = extFilter("scala")
  lazy val grammarFilter = extFilter("grammar")
  lazy val dotFilter = extFilter("dot")
  lazy val algoFilter = extFilter("algo")

  // file writer
  def getPrintWriter(filename: String): PrintWriter =
    new PrintWriter(new File(filename))

  // dump given data to a file
  def dumpFile(data: Any, filename: String): Unit = {
    val nf = getPrintWriter(filename)
    nf.print(data)
    nf.close()
  }
  def dumpFile(name: String, data: Any, filename: String): Unit = {
    val res = dumpFile(data, filename)
    println(s"dumped $name to $filename.")
  }

  // dump given data as JSON
  def dumpJson[T](
    data: T,
    filename: String,
    noSpace: Boolean = false
  )(implicit encoder: Encoder[T]): Unit = {
    val json = data.asJson
    dumpFile(if (noSpace) json.noSpaces else json.spaces2, filename)
  }
  def dumpJson[T](
    name: String,
    data: T,
    filename: String,
    noSpace: Boolean
  )(implicit encoder: Encoder[T]): Unit = {
    dumpJson(data, filename, noSpace)
    println(s"dumped $name to $filename in a JSON format.")
  }

  // get first filename
  def getFirstFilename(jsaverConfig: JSAVERConfig, msg: String): String =
    jsaverConfig.args.headOption.getOrElse(throw NoFileError(msg))

  // read file
  def readFile(filename: String): String = {
    val source = Source.fromFile(filename, ENC)
    val str = source.mkString
    source.close
    str
  }

  // read JSON
  def readJson[T](filename: String)(implicit decoder: Decoder[T]): T =
    parse(readFile(filename)) match {
      case Left(err) => throw err
      case Right(json) => json.as[T] match {
        case Left(err) => throw err
        case Right(v) => v
      }
    }

  // read HTML
  def readHtml(filename: String): Document = Jsoup.parse(readFile(filename))

  // delete files
  def deleteFile(filename: String): Unit = new File(filename).delete

  // change extension
  def changeExt(from: String, to: String): String => String =
    filename => filename.substring(0, filename.length - from.length) + to

  // get name without extension
  def removedExt(filename: String): String =
    filename.split('.').dropRight(1).mkString(".")

  // get extension
  def getExt(filename: String): String =
    filename.split('.').last

  // renamed filename
  def renameFile(from: String, to: String): Unit =
    new File(from).renameTo(new File(to))

  // copy file
  def copyFile(from: String, to: String): Unit = Files.copy(
    new File(from).toPath,
    new File(to).toPath,
    StandardCopyOption.REPLACE_EXISTING
  )

  // create directories
  def mkdir(name: String): Unit = new File(name).mkdirs

  // clean directories
  def cleanDir(name: String) = for (file <- walkTree(name)) {
    file.delete
  }

  // file existence check
  def exists(name: String): Boolean = new File(name).exists

  // revert entity name to character
  val unescapeHtml = StringEscapeUtils.unescapeHtml4(_)

  // revert character to entity name
  val escapeHtml = StringEscapeUtils.escapeHtml4(_)

  // escape js file to pass it to shell
  def escapeJS(str: String): String = StringEscapeUtils.escapeXSI(str)

  def isNormalExit(given: String): Boolean =
    optional(executeCmd(given)).isDefined

  // execute shell command with given dir, default to CUR_DIR
  def executeCmd(given: String, dir: String = CUR_DIR): String = {
    var cmd =
      if (DEBUG) { println(s"[SHELL] $given"); given }
      else s"$given 2> /dev/null"
    var directory = new File(dir)
    var process = Process(Seq("sh", "-c", cmd), directory)
    process !!
  }

  // change git version
  def changeVersion(target: String, dir: String = CUR_DIR): Unit =
    executeCmd(s"git checkout $target", dir)

  // get git current version
  def currentVersion(dir: String = CUR_DIR): String =
    executeCmd(s"git rev-parse HEAD", dir).trim

  // get Element array using queries
  def getElems(elem: Element, query: String): Array[Element] =
    toArray(elem.select(query))
  def toArray(elems: Elements): Array[Element] =
    elems.toArray(Array[Element]())

  // get range of element
  def getRange(elem: Element): Option[(Int, Int)] = {
    val s = elem.attr("s")
    val e = elem.attr("e")
    if (s == "") None else Some((s.toInt, e.toInt))
  }

  // get raw body of element
  def getRawBody(elem: Element)(implicit lines: Array[String]): Array[String] = {
    getRange(elem) match {
      case Some((s, e)) if s + 1 < e => lines.slice(s + 1, e - 1)
      case _ => Array(elem.html.replaceAll(LINE_SEP, " "))
    }
  }

  // set timeout
  def timeout[T](f: => T, limit: Option[Long]): T =
    timeout(f, limit.fold[Duration](Duration.Inf)(_.seconds))
  def timeout[T](f: => T, limit: Long): T = timeout(f, limit.seconds)
  def timeout[T](f: => T, duration: Duration): T =
    Await.result(Future(f), duration)
}
