package jsaver.js.builtin

import jsaver.js._
import jsaver.ir._

// builtin model keys
sealed trait Key {
  // conversion to string
  override def toString: String = this match {
    case StrKey(name) => name
    case SymbolKey(name) => s"@$name"
  }

  // conversion to IR value
  def toValue: PureValue = this match {
    case StrKey(name) => Str(name)
    case SymbolKey(name) => NamedAddr(s"GLOBAL.Symbol.$name")
  }

  // conversion to property string
  def toPropString: String = this match {
    case StrKey(name) => s".$name"
    case SymbolKey(name) => s"[$SYMBOL_PREFIX$name]"
  }
}
case class StrKey(name: String) extends Key
case class SymbolKey(name: String) extends Key
