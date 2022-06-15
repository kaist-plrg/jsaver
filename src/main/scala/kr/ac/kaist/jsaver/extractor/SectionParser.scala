package kr.ac.kaist.jsaver.extractor

import kr.ac.kaist.jsaver.util.JvmUseful._
import kr.ac.kaist.jsaver.spec.Section
import org.jsoup.nodes._

object SectionParser {
  def apply(elem: Element): Section = {
    val id = elem.id
    val subs = for {
      child <- toArray(elem.children).toList
      if child.tagName == "emu-clause"
    } yield apply(child)
    Section(id, subs)
  }
}
