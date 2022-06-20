package jsaver.analyzer.domain

import jsaver.LINE_SEP
import jsaver.ir._
import jsaver.analyzer._
import jsaver.parser.ESValueParser
import jsaver.util.Appender
import jsaver.util.Appender._
import jsaver.util.Useful._

// basic abstract objects
object BasicObj extends Domain {
  // bottom
  case object Bot extends Elem

  // symbols
  case class SymbolElem(desc: AbsValue) extends Elem

  // maps
  sealed trait MapElem extends Elem {
    // map types
    val ty: Ty

    // merged properties
    def mergedProp: AbsValue = this match {
      case MergedMap(_, prop, _) => prop
      case KeyWiseMap(_, map) => merge(map.keys.map(AbsValue(_)))
      case OrderedMap(_, map, _) => merge(map.keys.map(AbsValue(_)))
    }

    // merged values
    def mergedValue: AbsValue = this match {
      case MergedMap(_, _, value) => value
      case KeyWiseMap(_, map) => merge(map.values)
      case OrderedMap(_, map, _) => merge(map.values)
    }
  }
  type PropMap = Map[AValue, AbsValue]
  type PropOrder = Vector[AValue]
  sealed trait PropMapElem extends MapElem { val map: PropMap }
  case class MergedMap(ty: Ty, prop: AbsValue, value: AbsValue) extends MapElem
  case class KeyWiseMap(ty: Ty, map: PropMap) extends PropMapElem
  case class OrderedMap(ty: Ty, map: PropMap, props: PropOrder) extends PropMapElem

  // lists
  sealed trait ListElem extends Elem {
    // merged value of all possible values
    def mergedValue: AbsValue = this match {
      case MergedList(value) => value
      case KeyWiseList(values) => merge(values)
    }
  }
  case class MergedList(value: AbsValue) extends ListElem
  case class KeyWiseList(values: Vector[AbsValue]) extends ListElem

  // not supported objects
  case class NotSupportedElem(ty: Ty, desc: String) extends Elem

  // abstraction functions
  def apply(obj: Obj): Elem = obj match {
    case IRSymbol(desc) => SymbolElem(AbsValue(desc))
    case m @ IRMap(ty, props, size) => OrderedMap(
      ty = ty,
      map = (props.toList.map {
        case (k, (v, _)) => AValue.from(k) -> AbsValue(v)
      }).toMap,
      props = m.keys(intSorted = false).map(AValue.from),
    )
    case IRList(values) => KeyWiseList(values.map(AbsValue(_)))
    case IRNotSupported(tyname, desc) => NotSupportedElem(Ty(tyname), desc)
  }

  // appender
  implicit val app: App[Elem] = (app, elem) => elem match {
    case Bot => app >> "⊥"
    case SymbolElem(desc) => app >> "'" >> desc.toString
    case MergedMap(ty, prop, value) =>
      app >> s"$ty "
      app >> "{{" >> prop.toString >> " -> " >> value.toString >> "}}"
    case KeyWiseMap(ty, map) =>
      app >> s"$ty "
      if (map.isEmpty) app >> "{}"
      else app.wrap {
        for ((k, v) <- map) app :> s"$k -> " >> v >> LINE_SEP
      }
    case OrderedMap(ty, map, props) =>
      app >> s"$ty "
      if (map.isEmpty) app >> "{}"
      else app.wrap {
        for ((k, i) <- props.zipWithIndex) {
          app :> s"[$i] $k -> " >> map(k) >> LINE_SEP
        }
      }
    case MergedList(value) =>
      app >> "[[" >> value.toString >> "]]"
    case KeyWiseList(values) =>
      app >> values.mkString("[", ", ", "]")
    case NotSupportedElem(ty, desc) =>
      app >> s"???[$ty](" >> desc >> ")"
  }

  // merge helper
  private def merge(vs: Iterable[AbsValue]): AbsValue =
    vs.foldLeft(AbsValue.Bot)(_ ⊔ _)

  // elements
  sealed trait Elem extends ElemTrait {
    // partial order
    def ⊑(that: Elem): Boolean = (this, that) match {
      case (Bot, _) => true
      case (_, Bot) => false
      case (SymbolElem(ldesc), SymbolElem(rdesc)) => ldesc ⊑ rdesc
      case (l: PropMapElem, KeyWiseMap(rty, rmap)) => (
        l.ty == rty &&
        (l.map.keys ++ rmap.keys).forall(x => this(x) ⊑ that(x))
      )
      case (OrderedMap(lty, lmap, lprops), OrderedMap(rty, rmap, rprops)) => (
        lty == rty &&
        lprops == rprops &&
        lprops.forall(x => this(x) ⊑ that(x))
      )
      case (l: MapElem, r: MapElem) => (
        l.ty == r.ty &&
        l.mergedProp ⊑ r.mergedProp &&
        l.mergedValue ⊑ r.mergedValue
      )
      case (KeyWiseList(lvs), KeyWiseList(rvs)) => (
        lvs.length == rvs.length &&
        (lvs zip rvs).forall { case (l, r) => l ⊑ r }
      )
      case (l: ListElem, r: ListElem) =>
        l.mergedValue ⊑ r.mergedValue
      case (NotSupportedElem(lty, ld), NotSupportedElem(rty, rd)) =>
        lty == rty && ld == rd
      case _ => false
    }

    // join operator
    def ⊔(that: Elem): Elem = (this, that) match {
      case (Bot, _) => that
      case (_, Bot) => this
      case _ if this ⊑ that => that
      case _ if that ⊑ this => this
      case (SymbolElem(ldesc), SymbolElem(rdesc)) => SymbolElem(ldesc ⊔ rdesc)
      case (l: PropMapElem, KeyWiseMap(rty, rmap)) if l.ty == rty => {
        val map = (l.map.keys ++ rmap.keys).toList.map(x => x -> (this(x) ⊔ that(x))).toMap
        KeyWiseMap(rty, map)
      }
      case (KeyWiseMap(lty, _), r: PropMapElem) if lty == r.ty => that ⊔ this
      case (OrderedMap(lty, lmap, lprops), OrderedMap(rty, rmap, rprops)) if lty == rty => {
        val map = (lmap.keySet ++ rmap.keySet).toList.map(x => {
          x -> this(x) ⊔ that(x)
        }).toMap
        if (lprops == rprops) OrderedMap(lty, map, lprops)
        else KeyWiseMap(lty, map)
      }
      case (l: MapElem, r: MapElem) => MergedMap(
        ty = l.ty,
        prop = l.mergedProp ⊔ r.mergedProp,
        value = l.mergedValue ⊔ r.mergedValue,
      )
      case (l @ KeyWiseList(lvs), r @ KeyWiseList(rvs)) => if (lvs.length == rvs.length) {
        KeyWiseList((lvs zip rvs).map { case (l, r) => l ⊔ r })
      } else MergedList(l.mergedValue ⊔ r.mergedValue)
      case (l: ListElem, r: ListElem) =>
        MergedList(l.mergedValue ⊔ r.mergedValue)
      case (NotSupportedElem(lty, ld), NotSupportedElem(rty, rd)) if lty == rty && ld == rd => this
      case _ =>
        exploded(s"cannot merge: ${this.getTy} with ${that.getTy}")
    }

    // lookup
    def apply(key: AValue): AbsValue = this match {
      case Bot => AbsValue.Bot
      case SymbolElem(desc) => key match {
        case ASimple(Str("Description")) => desc
        case _ => AbsValue.Bot
      }
      case MergedMap(_, prop, value) =>
        if (AbsValue(key) ⊑ prop) value
        else AbsValue.absent
      case m: PropMapElem => m.map.getOrElse(key, AbsValue.absent)
      case MergedList(value) => value
      case KeyWiseList(values) => key match {
        case ASimple(INum(long)) =>
          val idx = long.toInt
          if (0 <= idx && idx < values.length) values(idx)
          else AbsValue.absent
        case ASimple(Str("length")) => AbsValue(values.length)
        case _ => AbsValue.Bot
      }
      case NotSupportedElem(_, desc) => AbsValue.Bot
    }

    // get type
    def getTy: Ty = this match {
      case Bot => Ty("")
      case SymbolElem(desc) => Ty("Symbol")
      case m: MapElem => m.ty
      case MergedList(value) => Ty("List")
      case KeyWiseList(values) => Ty("List")
      case NotSupportedElem(ty, desc) => ty
    }

    // abstract lookup
    def apply(akey: AbsValue): AbsValue = akey.getSingle match {
      case FlatBot => AbsValue.Bot
      case FlatTop => this match {
        case Bot => AbsValue.Bot
        case SymbolElem(desc) => desc
        case m: MapElem => m.mergedValue
        case l: ListElem => l.mergedValue
        case NotSupportedElem(_, desc) => AbsValue.Bot
      }
      case FlatElem(key) => this(key)
    }

    // singleton checks
    def isSingle: Boolean = this match {
      case SymbolElem(desc) => desc.isSingle
      case OrderedMap(_, map, _) => map.forall(_._2.isSingle)
      case KeyWiseList(values) => values.forall(_.isSingle)
      case NotSupportedElem(_, desc) => true
      case _ => false
    }

    // get reachable locations
    def reachableLocs: Set[Loc] = this match {
      case SymbolElem(desc) => desc.reachableLocs
      case MergedMap(_, prop, value) => prop.reachableLocs ++ value.reachableLocs
      case m: PropMapElem => m.map.foldLeft(Set[Loc]()) {
        case (set, (k, v)) => set ++ v.reachableLocs ++ (k match {
          case loc: Loc => Some(loc)
          case _ => None
        })
      }
      case MergedList(value) => value.reachableLocs
      case KeyWiseList(values) => values.foldLeft(Set[Loc]())(_ ++ _.reachableLocs)
      case _ => Set()
    }

    // updates
    def update(prop: AbsValue, value: AbsValue, weak: Boolean): Elem = {
      def aux(key: AValue): MapUpdater = _ match {
        case MergedMap(t, p, v) => MergedMap(t, p ⊔ prop, v ⊔ value)
        case KeyWiseMap(ty, map) => KeyWiseMap(ty, map + (key -> value))
        case OrderedMap(ty, map, props) => OrderedMap(
          ty,
          map + (key -> value),
          if (map contains key) props else props :+ key
        )
      }
      def mergedAux: MapUpdater = m => MergedMap(
        m.ty,
        m.mergedProp ⊔ prop,
        m.mergedValue ⊔ value,
      )
      modifyMap(prop, aux, mergedAux, aux, mergedAux, weak)
    }

    // delete
    def delete(prop: AbsValue, weak: Boolean): Elem = {
      def aux(key: AValue): MapUpdater = _ match {
        case KeyWiseMap(ty, map) => KeyWiseMap(ty, map - key)
        case OrderedMap(ty, map, props) => OrderedMap(
          ty,
          map - key,
          if (map contains key) props.filter(_ != key) else props
        )
        case m => m
      }
      def mergedAux: MapUpdater = m => MergedMap(
        m.ty,
        m.mergedProp,
        m.mergedValue
      )
      modifyMap(prop, aux, mergedAux, aux, mergedAux, weak)
    }

    // helper for map structures
    type MapUpdater = MapElem => MapElem
    private def modifyMap(
      prop: AbsValue,
      jsF: AValue => MapUpdater,
      jsMergedF: MapUpdater,
      f: AValue => MapUpdater,
      mergedF: MapUpdater,
      weak: Boolean
    ): Elem = this match {
      // for JavaScript
      case map @ MergedMap(ty @ Ty("SubMap"), _, _) =>
        jsMergedF(map)
      case map @ OrderedMap(ty @ Ty("SubMap"), _, _) =>
        prop.keyValue.getSingle match {
          case FlatBot => this
          case FlatElem(key) if !weak => jsF(key)(map)
          case _ => jsMergedF(map)
        }
      // for IR
      case map @ MergedMap(ty, _, _) =>
        mergedF(map)
      case map @ OrderedMap(ty, _, _) =>
        prop.keyValue.getSingle match {
          case FlatBot => this
          case FlatElem(key) if !weak => f(key)(map)
          case _ => mergedF(map)
        }
      case _ => this
    }

    // appends
    def append(value: AbsValue, weak: Boolean): Elem =
      modifyList(_ :+ value, _ ⊔ value, weak)

    // prepends
    def prepend(value: AbsValue, weak: Boolean): Elem =
      modifyList(value +: _, _ ⊔ value, weak)

    // pops
    def pop(idx: AbsValue, weak: Boolean): (AbsValue, Elem) = this match {
      case l: ListElem => idx.int.getSingle match {
        case FlatBot => (AbsValue.Bot, Bot)
        case FlatElem(INum(long)) => {
          val k = long.toInt
          var v: AbsValue = AbsValue.Bot
          val newObj = modifyList(
            vs => {
              if (0 <= k && k < vs.length) {
                v = vs(k); vs.slice(0, k) ++ vs.slice(k + 1, vs.length)
              } else {
                v = AbsValue.absent; vs
              }
            },
            mv => { v = mv; mv },
            weak
          )
          (v, newObj)
        }
        case FlatTop => (l.mergedValue, MergedList(l.mergedValue))
      }
      case _ => (AbsValue.Bot, Bot)
    }

    // helper for map structures
    type ListUpdater = Vector[AbsValue] => Vector[AbsValue]
    private def modifyList(
      f: ListUpdater,
      mergedF: AbsValue => AbsValue,
      weak: Boolean
    ): Elem = this match {
      case l @ MergedList(value) => MergedList(mergedF(value))
      case l @ KeyWiseList(values) =>
        if (weak) MergedList(mergedF(l.mergedValue))
        else KeyWiseList(f(values))
      case _ => Bot
    }

    // keys of map
    def keys(intSorted: Boolean): Elem = this match {
      case MergedMap(_, prop, _) => MergedList(prop)
      case m: OrderedMap => m match {
        case OrderedMap(ty, map, props) => KeyWiseList(if (intSorted) {
          (for {
            ASimple(Str(s)) <- props
            d = ESValueParser.str2num(s)
            if toStringHelper(d) == s
            i = d.toLong
            if d == i
          } yield (s, i))
            .sortBy(_._2)
            .map { case (s, _) => AbsValue(s) }
        } else if (ty.name == "SubMap") {
          props.map(AbsValue(_))
        } else props.sortBy(_.toString).map(AbsValue(_)))
        case _ => MergedList(m.mergedProp)
      }
      case _ => Bot
    }

    // set type of objects
    def setType(ty: Ty): Elem = this match {
      case MergedMap(_, prop, value) => MergedMap(ty, prop, value)
      case OrderedMap(_, map, props) => OrderedMap(ty, map, props)
      case _ => error("cannot set type of non-map abstract objects.")
    }

    // check contains
    def contains(value: AbsValue): AbsBool = (this, value.getSingle) match {
      case (Bot, _) | (_, FlatBot) => AbsBool.Bot
      case (KeyWiseList(values), FlatElem(_)) =>
        if (values contains value) AT
        else if (values.forall(v => (v ⊓ value).isBottom)) AF
        else AB
      case (MergedList(mergedValue), _) =>
        if ((mergedValue ⊓ value).isBottom) AF
        else AB
      case _ => AbsBool.Bot
    }
  }
}
