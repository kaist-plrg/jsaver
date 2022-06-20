package jsaver.spec

import org.jsoup.nodes._
import jsaver.util.Appender
import jsaver.util.Appender._
import jsaver.util.Useful._
import jsaver.extractor.SectionParser
import jsaver.spec.Parser

case class Section(id: String, subs: List[Section]) extends SpecElem
object Section extends Parser[Section] {
  def apply(elem: Element): Section = SectionParser(elem)

  implicit lazy val SectionApp: App[Section] = (app, section) => {
    app >> "[" >> section.id >> "] "
    app.listWrap(section.subs)
  }
}
