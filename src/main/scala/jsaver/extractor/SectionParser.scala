package jsaver.extractor

import jsaver.util.JvmUseful._
import jsaver.spec.Section
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
