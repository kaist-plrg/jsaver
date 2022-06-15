package kr.ac.kaist.jsaver.spec

import org.jsoup.nodes._
import kr.ac.kaist.jsaver.util.Appender
import kr.ac.kaist.jsaver.util.Appender._
import kr.ac.kaist.jsaver.util.Useful._
import kr.ac.kaist.jsaver.extractor.SectionParser
import kr.ac.kaist.jsaver.spec.Parser

case class Section(id: String, subs: List[Section]) extends SpecElem
object Section extends Parser[Section] {
  def apply(elem: Element): Section = SectionParser(elem)

  implicit lazy val SectionApp: App[Section] = (app, section) => {
    app >> "[" >> section.id >> "] "
    app.listWrap(section.subs)
  }
}
