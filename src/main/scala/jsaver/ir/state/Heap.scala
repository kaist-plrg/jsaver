package jsaver.ir

import jsaver.error.NotSupported
import jsaver.parser.ESValueParser
import jsaver.util.Useful._
import jsaver.js
import scala.collection.mutable.{ Map => MMap }

// IR Heaps
case class Heap(
  map: MMap[Addr, Obj] = MMap(),
  var size: Int = 0
) extends IRElem {
  // getters
  def apply(addr: Addr): Obj =
    map.getOrElse(addr, error(s"unknown address: $addr"))
  def apply(addr: Addr, key: PureValue): Value = this(addr) match {
    case (s: IRSymbol) => s(key)
    case (IRMap(Ty(js.ALGORITHM), _, _)) => getAlgorithm(key)
    case (IRMap(Ty(js.INTRINSICS), _, _)) => getIntrinsics(key)
    case (m: IRMap) => m(key)
    case (l: IRList) => l(key)
    case IRNotSupported(_, msg) => throw NotSupported(msg)
  }

  // setters
  def update(addr: Addr, prop: PureValue, value: Value): this.type = this(addr) match {
    case (m: IRMap) =>
      m.update(prop, value); this
    case v => error(s"not a map: $v")
  }

  // delete
  def delete(addr: Addr, prop: PureValue): this.type = this(addr) match {
    case (m: IRMap) =>
      m.delete(prop); this
    case v => error(s"not a map: $v")
  }

  // appends
  def append(addr: Addr, value: PureValue): this.type = this(addr) match {
    case (l: IRList) =>
      l.append(value); this
    case v => error(s"not a list: $v")
  }

  // prepends
  def prepend(addr: Addr, value: PureValue): this.type = this(addr) match {
    case (l: IRList) =>
      l.prepend(value); this
    case v => error(s"not a list: $v")
  }

  // pops
  def pop(addr: Addr, idx: PureValue): PureValue = this(addr) match {
    case (l: IRList) => l.pop(idx)
    case v => error(s"not a list: $v")
  }

  // copy objects
  def copyObj(addr: Addr): Addr = alloc(this(addr).copied)

  // keys of map
  def keys(addr: Addr, intSorted: Boolean): Addr = {
    alloc(IRList(this(addr) match {
      case (m: IRMap) => m.keys(intSorted)
      case obj => error(s"not a map: $obj")
    }))
  }

  // map allocations
  def allocMap(
    ty: Ty,
    m: Map[PureValue, PureValue] = Map()
  ): Addr = {
    val irMap = if (ty.name == "Record") IRMap(ty, MMap(), 0L) else IRMap(ty)
    for ((k, v) <- m) irMap.update(k, v)
    if (ty.hasSubMap) {
      val subMap = IRMap(Ty("SubMap"))
      irMap.update(Str("SubMap"), alloc(subMap))
    }
    alloc(irMap)
  }

  // list allocations
  def allocList(list: List[PureValue]): Addr = alloc(IRList(list.toVector))

  // symbol allocations
  def allocSymbol(desc: PureValue): Addr = alloc(IRSymbol(desc))

  // allocation helper
  private def alloc(obj: Obj): Addr = {
    val newAddr = DynamicAddr(size)
    map += newAddr -> obj
    size += 1
    newAddr
  }

  // property access helper
  private def getAddrValue(
    addr: Addr,
    propName: String
  ): Addr = this(addr, Str(propName)) match {
    case addr: Addr => addr
    case v => error(s"not an address: $v")
  }
  private def getPropValue(
    addr: Value,
    propName: String
  ): Value = addr match {
    case addr: Addr =>
      val submap = getAddrValue(addr, "SubMap")
      val prop = getAddrValue(submap, propName)
      this(prop, Str("Value"))
    case _ => error(s"not an address: $addr")
  }

  // set type of objects
  def setType(addr: Addr, ty: Ty): this.type = this(addr) match {
    case (irMap: IRMap) =>
      irMap.ty = ty; this
    case _ => error(s"invalid type update: $addr")
  }

  // copied
  def copied: Heap = {
    val newMap = MMap.from(map.toList.map {
      case (addr, obj) => addr -> obj.copied
    })
    Heap(newMap, size)
  }

  // speical object access helper
  def getAlgorithm(key: PureValue): Value = key match {
    case Str(str) => js.algoMap.get(str).map(Func).getOrElse(Absent)
    case _ => error(s"invalid algorithm: $key")
  }
  def getIntrinsics(key: PureValue): Value = key match {
    case Str(str) if js.intrinsicRegex.matches(str) =>
      // resolve %A.B.C%
      val js.intrinsicRegex(path) = str
      path.split("\\.").toList match {
        case base :: rest =>
          val baseAddr = js.intrinsicToAddr(base)
          rest.foldLeft(baseAddr: Value)(getPropValue)
        case Nil =>
          error(s"invalid intrinsics: $key")
      }
    case _ => error(s"invalid intrinsics: $key")
  }
}
