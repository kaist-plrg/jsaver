package jsaver.ir

import jsaver.parser.BasicParsers

// IR parser
object Parser extends Parsers

// IR parser
trait Parser[T] extends Parsers {
  def fromFile(str: String)(implicit parser: Parser[T]): T =
    fromFileWithParser(str, parser)
  def apply(str: String)(implicit parser: Parser[T]): T =
    parse[T](str)
}

// IR parsers
trait Parsers extends BasicParsers {
  ////////////////////////////////////////////////////////////////////////////////
  // Syntax
  ////////////////////////////////////////////////////////////////////////////////
  // programs
  implicit lazy val program: Parser[Program] = rep(inst) ^^ { Program(_) }

  // instructions
  implicit lazy val insts: Parser[List[Inst]] = rep(inst)
  implicit lazy val inst: Parser[Inst] = opt(integer <~ ":") ~ opt("(" ~> integer <~ ")") ~ (
    "delete " ~> ref ^^ { IDelete(_) } |
    ("append " ~> expr <~ "->") ~ expr ^^ { case e ~ l => IAppend(e, l) } |
    ("prepend " ~> expr <~ "->") ~ expr ^^ { case e ~ l => IPrepend(e, l) } |
    "return " ~> expr ^^ { case e => IReturn(e) } |
    "throw " ~> ident ^^ { case x => IThrow(x) } |
    ("if " ~> expr) ~ inst ~ ("else" ~> inst) ^^ { case c ~ t ~ e => IIf(c, t, e) } |
    ("while " ~> expr) ~ inst ^^ { case c ~ b => IWhile(c, b) } |
    "{" ~> rep(inst) <~ "}" ^^ { case seq => ISeq(seq) } |
    "assert " ~> expr ^^ { case e => IAssert(e) } |
    "print " ~> expr ^^ { case e => IPrint(e) } |
    ("let " ~> id <~ "=") ~ expr ^^ { case x ~ e => ILet(x, e) } |
    ("app " ~> id <~ "=") ~ ("(" ~> expr) ~ (rep(expr) <~ ")") ^^ { case x ~ f ~ as => IApp(x, f, as) } |
    ("access " ~> id <~ "=") ~ ("(" ~> expr) ~ expr ~ (rep(expr) <~ ")") ^^ { case x ~ e1 ~ e2 ~ e3 => IAccess(x, e1, e2, e3) } |
    ("clo " ~> id <~ "=") ~ ("(" ~> repsep(id, ",") <~ ")") ~ ("[" ~> repsep(id, ",") <~ "]") ~ ("=>" ~> inst) ^^ { case x ~ ps ~ cs ~ b => IClo(x, ps, cs, b) } |
    ("cont " ~> id <~ "=") ~ ("(" ~> repsep(id, ",") <~ ")") ~ ("[=>]" ~> inst) ^^ { case x ~ ps ~ b => ICont(x, ps, b) } |
    ("withcont " ~> id) ~ ("(" ~> repsep(id, ",") <~ ")" <~ "=") ~ inst ^^ { case x ~ ps ~ b => IWithCont(x, ps, b) } |
    (ref <~ "=") ~ expr ^^ { case r ~ e => IAssign(r, e) } |
    expr ^^ { case e => IExpr(e) }
  ) ^^ {
      case l ~ Some(k) ~ (i: AllocSite) =>
        i.line = l.map(_.toInt); i.setASite(k.toInt)
      case l ~ _ ~ i =>
        i.line = l.map(_.toInt); i
    }

  // expressions
  implicit lazy val expr: Parser[Expr] = opt("(" ~> integer <~ ")") ~ (
    ref ^^ { ERef(_) } |
    s"${integer}i".r ^^ { case s => EINum(s.dropRight(1).toLong) } |
    s"${integer}n".r ^^ { case s => EBigINum(BigInt(s.dropRight(1))) } |
    floatingPointNumber ^^ { case s => ENum(s.toDouble) } |
    "Infinity" ^^ { case s => ENum(Double.PositiveInfinity) } |
    "+Infinity" ^^ { case s => ENum(Double.PositiveInfinity) } |
    "-Infinity" ^^ { case s => ENum(Double.NegativeInfinity) } |
    "NaN" ^^ { case s => ENum(Double.NaN) } |
    string ^^ { EStr(_) } |
    bool ^^ { EBool(_) } |
    "undefined" ^^^ EUndef |
    "null" ^^^ ENull |
    "absent" ^^^ EAbsent |
    "~" ~> "[^~]+".r <~ "~" ^^ { EConst(_) } |
    "???" ~> string ^^ { ENotSupported(_) } |
    "(" ~> (uop ~ expr) <~ ")" ^^ { case u ~ e => EUOp(u, e) } |
    "(" ~> (bop ~ expr ~ expr) <~ ")" ^^ { case b ~ l ~ r => EBOp(b, l, r) } |
    "(" ~> ("typeof" ~> expr) <~ ")" ^^ { case e => ETypeOf(e) } |
    "(" ~> ("is-completion" ~> expr) <~ ")" ^^ { case e => EIsCompletion(e) } |
    ("(" ~ "comp" ~ "[" ~> expr <~ "]") ~ expr ~ ("=>" ~> expr <~ ")") ^^ {
      case y ~ v ~ t => EComp(y, v, t)
    } |
    ("(" ~> "new" ~> ty) ~ ("(" ~> repsep(prop, ",") <~ ")" <~ ")") ^^ {
      case t ~ props => EMap(t, props)
    } |
    ("(" ~> "new" ~> ty <~ ")") ^^ { case t => EMap(t, Nil) } |
    ("(" ~> "new" ~> "[" ~> repsep(expr, ",") <~ "]" <~ ")") ^^ { EList(_) } |
    ("(" ~> "new" ~> "'" ~> expr <~ ")") ^^ { ESymbol(_) } |
    ("(" ~> "pop" ~> expr ~ expr <~ ")") ^^ { case l ~ x => EPop(l, x) } |
    ("(" ~> "is-instance-of" ~> expr) ~ (ident <~ ")") ^^ {
      case e ~ x => EIsInstanceOf(e, x)
    } |
    ("(" ~> "get-elems" ~> expr) ~ (ident <~ ")") ^^ {
      case e ~ x => EGetElems(e, x)
    } |
    "(" ~> "get-syntax" ~> expr <~ ")" ^^ { case e => EGetSyntax(e) } |
    "(" ~> "parse-syntax" ~> expr ~ expr ~ rep(bool) <~ ")" ^^ {
      case e ~ r ~ ps => EParseSyntax(e, r, ps)
    } |
    "(" ~> "convert" ~> expr ~ cop ~ rep(expr) <~ ")" ^^ { case e ~ r ~ l => EConvert(e, r, l) } |
    "(" ~> "contains" ~> expr ~ expr <~ ")" ^^ { case l ~ e => EContains(l, e) } |
    "[" ~> "?" ~> expr <~ "]" ^^ { case e => EReturnIfAbrupt(e, true) } |
    "[" ~> "!" ~> expr <~ "]" ^^ { case e => EReturnIfAbrupt(e, false) } |
    "(" ~> "copy-obj" ~> expr <~ ")" ^^ { case e => ECopy(e) } |
    "(" ~> "map-keys" ~> expr <~ ")" ^^ { case e => EKeys(e, false) } |
    "(" ~> "map-keys" ~> expr <~ "[int-sorted]" ~ ")" ^^ { case e => EKeys(e, true) }
  ) ^^ {
      case Some(k) ~ (e: AllocSite) => e.setASite(k.toInt)
      case _ ~ e => e
    }

  // properties
  lazy val prop: Parser[(Expr, Expr)] =
    (expr <~ "->") ~ expr ^^ { case k ~ v => (k, v) }

  // references
  implicit lazy val ref: Parser[Ref] = {
    id ~ rep(propExpr) ^^ {
      case x ~ es => es.foldLeft[Ref](RefId(x)) {
        case (ref, expr) => RefProp(ref, expr)
      }
    }
  }
  lazy val propExpr: Parser[Expr] =
    "." ~> ident ^^ { case x => EStr(x) } | "[" ~> expr <~ "]"

  // types
  lazy val ty: Parser[Ty] = ident ^^ { Ty(_) }

  // identifiers
  lazy val id: Parser[Id] = ident.withFilter(s => !(keywords contains s)) ^^ { Id(_) }
  val keywords: Set[String] = Set(
    "Infinity", "NaN", "true", "false", "undefined", "null", "absent",
    "typeof", /*"new",*/ "pop", "is-instance-of", "get-syntax", "contains"
  )

  // unary operators
  implicit lazy val uop: Parser[UOp] = {
    "-" ^^^ ONeg | "!" ^^^ ONot | "~" ^^^ OBNot
  }

  // binary operators
  implicit lazy val bop: Parser[BOp] = (
    "+" ^^^ OPlus |
    "-" ^^^ OSub |
    "**" ^^^ OPow |
    "*" ^^^ OMul |
    "/" ^^^ ODiv |
    "%%" ^^^ OUMod |
    "%" ^^^ OMod |
    "==" ^^^ OEqual |
    "=" ^^^ OEq |
    "&&" ^^^ OAnd |
    "||" ^^^ OOr |
    "^^" ^^^ OXor |
    "&" ^^^ OBAnd |
    "|" ^^^ OBOr |
    "^" ^^^ OBXOr |
    "<<" ^^^ OLShift |
    "<" ^^^ OLt |
    ">>>" ^^^ OURShift |
    ">>" ^^^ OSRShift
  )

  // convert operators
  implicit lazy val cop: Parser[COp] = (
    "str2num" ^^^ CStrToNum |
    "str2bigint" ^^^ CStrToBigInt |
    "num2str" ^^^ CNumToStr |
    "num2int" ^^^ CNumToInt |
    "num2bigint" ^^^ CNumToBigInt |
    "bigint2num" ^^^ CBigIntToNum
  )
}
