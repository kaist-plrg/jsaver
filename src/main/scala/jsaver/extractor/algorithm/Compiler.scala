package jsaver.extractor.algorithm

import jsaver.spec.algorithm._
import jsaver.spec.algorithm.token._
import jsaver.ir.Parser._
import jsaver.ir.{ Id => IRId, _ }
import jsaver.util.Useful._
import jsaver.js.{ INTRINSICS }
import scala.util.{ Try, Success, Failure }

class Compiler private (
  val version: String,
  val secIds: Map[String, String]
) extends Compilers {
  def apply(tokens: List[Token], start: Int = 0): Inst =
    parseAll(normalizedStmts, tokens).getOrElse(ISeq(Nil))

  ////////////////////////////////////////////////////////////////////////////////
  // Instructions
  ////////////////////////////////////////////////////////////////////////////////
  lazy val normalizedStmts: P[Inst] = stmts ^^ {
    case list => postProcess(ISeq(list))
  }

  lazy val stmt: P[Inst] = {
    etcStmt | ignoreStmt | (
      innerStmt |||
      returnStmt |||
      letStmt |||
      ifStmt |||
      callStmt |||
      setStmt |||
      incrementStmt |||
      decrementStmt |||
      throwStmt |||
      whileStmt |||
      forEachStmt |||
      appendStmt |||
      insertStmt |||
      removeStmt |||
      suspendStmt |||
      pushStmt |||
      resumeStmt |||
      subtractStmt |||
      evaluateStmt |||
      assertStmt |||
      optionalStmt |||
      starStmt |||
      assignmentStmt |||
      contStmt |||
      earlyErrorStmt
    )
  } <~ opt("." | ";") ~ opt(comment) | comment
  lazy val comment: P[Inst] =
    "assert:" ~> cond <~ guard("." ~ next) ^^ { case i ~ e => ISeq(i :+ IAssert(e)) } |
      (
        "assert:" |
        "note" |
        "this may be" |
        "as defined" |
        "( if" |
        "( no conversion )" |
        "this call will always return" ~ value |
        (opt("(") <~ ("see" | "it may be"))
      ) ~ rest ^^^ emptyInst

  // ignore statements
  lazy val ignoreStmt: P[Inst] = (
    "need to defer setting the" |
    "create any implementation-defined" |
    "no further validation is required" |
    "if" ~ id ~ "is a List of errors," |
    "order the elements of" ~ id ~ "so they are in the same relative order as would" |
    "Perform any implementation or host environment defined processing of" |
    "Perform any implementation or host environment defined job initialization using" |
    "Perform any necessary implementation-defined initialization" |
    "Once a generator enters" |
    "No action is required"
  ) ~ rest ^^^ emptyInst

  // inner statements
  lazy val innerStmt: P[Inst] = in ~> stmts <~ out ^^ { ISeq(_) }

  // return statements
  lazy val returnStmt: P[Inst] = "return" ~> (
    ("completion" | "normalcompletion") ~ "(" ~> returnInner <~ ")" |
    returnInner
  ) ~ opt(opt(".") ~ next ~ "NOTE: This returns to the evaluation of the operation that had most previously resumed evaluation of" ~> id <~ ".") ^^ {
      case i ~ y => i match {
        case ISeq(list) => (list.reverse, y) match {
          case (IReturn(e) :: rest, Some("genContext")) =>
            val newInst = Inst(s"app _ = ((pop genContext.ReturnCont 0i) $e)")
            ISeq((newInst :: rest).reverse)
          case (IReturn(e) :: rest, Some("asyncContext")) =>
            val newInst = Inst(s"app _ = ($retcont $e)")
            ISeq((newInst :: rest).reverse)
          case _ => i
        }
        case _ => i
      }
    }
  lazy val returnInner: P[Inst] = (
    opt(expr) ^^ { getRet(_) } |||
    rep1sep(expr ~ ("if" ~> cond), "and") ~ opt(
      opt("," | ".") ~> "otherwise" ~> opt(",") ~> "return" ~> expr
    ) ^^ {
        case retInsts ~ retOther => {
          val baseRet = getRet(retOther)
          retInsts.foldRight(baseRet) {
            case (retVal ~ (i ~ cond), ielse) => {
              ISeq(i :+ IIf(cond, getRet(retVal), ielse))
            }
          }
        }
      }
  )

  // let binding statements
  lazy val letStmt = ("Let" ~> rep1sep(id, sep("and")) <~ "be") ~ expr ~ opt(("; if" ~> cond <~ ", use") ~ expr) ^^ {
    case xs ~ (i ~ e) ~ None => ISeq(i ++ xs.map(x => ILet(IRId(x), e)))
    case xs ~ (i1 ~ e1) ~ Some((i2 ~ e2) ~ (i3 ~ e3)) =>
      ISeq(i2 :+ IIf(e2, ISeq(i3 ++ xs.map(x => ILet(IRId(x), e3))), ISeq(i1 ++ xs.map(x => ILet(IRId(x), e1)))))
  } ||| (("let" ~> id <~ "be a newly created object with an internal slot for each name in") ~ id) ^^ {
    case x ~ y => {
      val i0 = ILet(IRId(x), EMap(Ty("OrdinaryObject"), Nil))
      val temp = getTemp
      val body = Inst(s"$x[$temp] = undefined")
      val i1 = forEachList(IRId(temp), toERef(y), body)
      ISeq(i0 :: i1 :: Nil)
    }
  }

  // if-then-else statements
  lazy val ifStmt = {
    ("if" ~> cond <~ "," ~
      opt("then")) ~ stmt ~ opt(opt("." | ";" | ",") ~> opt(next) <~ guard("else" | "otherwise")) ~
      opt(("else" | "otherwise") ~ opt(",") ~ opt(ignoreCond | cond) ~ opt("," | ";") ~> stmt)
  } ^^ {
    case (i ~ c) ~ t ~ line ~ e =>
      val ifInst = IIf(c, t, e.getOrElse(emptyInst))
      val insts = i :+ ifInst
      insts.foreach(_.setLine(line.getOrElse(None)))
      ISeq(insts)
  } ||| ("if" ~> (nt | id) <~ "is" ~ opt("the production")) ~ grammar ~ ("," ~ opt("then") ~> stmt) ^^ {
    case x ~ Gr(y, ss) ~ s =>
      val pre = ss.map(s => IAccess(IRId(s), toERef(x), EStr(s), Nil))
      IIf(EIsInstanceOf(toERef(x), y), ISeq(pre :+ s), emptyInst)
  } ||| {
    stmt ~ (opt(",") ~> "if" ~> cond) ~ opt(opt("." | ";" | ",") ~> opt(next) <~ guard("else" | "otherwise")) ~
      opt(("else" | "otherwise") ~ opt(ignoreCond | cond) ~ opt(",") ~> stmt)
  } ^^ {
    case t ~ (i ~ c) ~ line ~ e =>
      val ifInst = IIf(c, t, e.getOrElse(emptyInst))
      val insts = i :+ ifInst
      insts.foreach(_.setLine(line.getOrElse(None)))
      ISeq(insts)
  }

  lazy val ignoreCond: P[I[Expr]] = (
    "the order of evaluation needs to be reversed to preserve left to right evaluation" |
    name ~ "is added as a single item rather than spread" |
    name ~ "contains a formal parameter mapping for" ~ name |
    name ~ "is a Reference to an Environment Record binding" |
    "the base of" ~ ref ~ "is an Environment Record" |
    (id | name) ~ "must be" ~ rep(not(",") ~ text) |
    id ~ "does not currently have a property" ~ id |
    ("isaccessordescriptor(" ~> id <~ ") and isaccessordescriptor(") ~ (id <~ ") are both") ~ expr
  ) ^^^ pair(Nil, EBool(true))

  // call statements
  lazy val callStmt: P[Inst] = (("perform" | "call") ~> expr ||| returnIfAbruptExpr) ~ opt("and" ~> (
    "return its" ~ opt(camelWord) ~ "result" ^^^ { (e: Expr) => IReturn(e) } |||
    "let" ~> id <~ "be" ~ ("the" ~ camelWord ~ "result" | "its result" | "the resulting" ~ camelWord ~ opt("value")) ^^ { x => (e: Expr) => ILet(IRId(x), e) }
  )) ^^ {
    case i ~ e ~ None => ISeq(i :+ IExpr(e))
    case i ~ e ~ Some(f) => ISeq(i :+ f(e))
  }

  // set statements
  lazy val setStmt = (
    "set" ~> setRef ~ {
      "to" ~> expr ||| (
        "as" ~ ("described" | "specified") ~ "in" |||
        "to the definition specified in"
      ) ~> refExpr
    } ^^ {
      case (i0 ~ r) ~ (i1 ~ e) => ISeq(i0 ++ i1 :+ IAssign(r, e))
    } ||| "set" ~ opt("the remainder of") ~ id ~ "'s essential internal methods" ~ rest ^^^ emptyInst
  )
  lazy val setRef: P[I[Ref]] =
    ref ||| opt("the") ~> (camelWord <~ "of") ~ refBase ^^ { case f ~ b => pair(Nil, toRef(b, f)) }

  // increment statements
  lazy val incrementStmt = (("increment" | "increase") ~> rep1sep(ref, sep("and"))) ~ opt(opt("each") ~ "by" ~> expr) ^^ {
    case ps ~ iy =>
      val (i1, y) = iy match {
        case Some(i ~ y) => (i, y)
        case None => (Nil, EINum(1))
      }
      val i0 = ps.map { case i ~ _ => i }.flatten
      val as = ps.map { case _ ~ x => IAssign(x, EBOp(OPlus, ERef(x), y)) }
      ISeq(i0 ++ i1 ++ as)
  }

  // decrement statements
  lazy val decrementStmt = (("decrement" | "decrease") ~> ref <~ "by") ~ expr ^^ {
    case (i0 ~ x) ~ (i1 ~ y) => ISeq(i0 ++ i1 :+ IAssign(x, EBOp(OSub, ERef(x), y)))
  }

  // throw statements
  lazy val throwStmt =
    "throw" ~ ("a" | "an") ~> value <~ "exception" ~ rest ^^ { IThrow(_) }

  // while statements
  lazy val whileStmt = (
    "repeat" ~ opt(",") ~> opt("while" ~> cond <~ opt(",")) |
    opt("while" ~> cond) <~ "repeat" ~ opt(",")
  ) ~ stmt ^^ {
      case Some(i ~ c) ~ s => ISeq(i :+ IWhile(c, s))
      case None ~ s => IWhile(EBool(true), s)
    }

  // for-each statements
  lazy val forEachStmt = {
    (opt("repeat" ~ opt(",")) ~> "for each" ~ rep(nt | text) ~> id) ~
      (("in order from" | "in" | "of" | "from" | "that is an element of") ~> expr) ~
      (opt(mention) ~ opt(",") ~> (
        opt("in list order" | "in original insertion order") ^^^ false |||
        "in reverse list order" ^^^ true
      )) ~ (opt(",") ~ opt("do") ~ opt(",") ~> stmt)
  } ^^ {
    case x ~ (i ~ e) ~ isRev ~ b => ISeq(i :+ forEachList(IRId(x), e, b, isRev))
  } ||| "for each integer" ~> id ~ (
    ("in the range" ~> expr <~ "≤" ~ id ~ "<") ~ expr ^^ { case x ~ y => (x, y, 0, 0) } |
    ("starting with" ~> expr <~ "such that" ~ id ~ "<") ~ expr ^^ { case x ~ y => (x, y, 0, 0) } |
    ("starting with" ~> expr <~ "such that" ~ id ~ "≤") ~ expr ^^ { case x ~ y => (x, y, 0, 1) } |
    ("such that" ~ id ~ ">" ~> expr <~ "and" ~ id ~ "≤") ~ expr ^^ { case x ~ y => (x, y, 1, 1) } |
    ("that satisfies" ~> expr <~ "<" ~ id ~ "and" ~ id ~ "≤") ~ expr ^^ { case x ~ y => (x, y, 1, 1) }
  ) ~ (opt(", in ascending order") ~ opt(",") ~ opt("do") ~> stmt) ^^ {
      case k ~ ((i0 ~ s, i1 ~ e, ds, de)) ~ b =>
        val n = getTemp
        ISeq(i0 ++ i1 :+ Inst(s"""{
          let $k = (+ $s ${ds}i)
          let $n = (+ $e ${de}i)
          while (< $k $n) {
            $b
            $k = (+ $k 1i)
          }
        }"""))
    } ||| (
      ("for each own property key" ~> id) ~
      ("of" ~> id) ~
      ("that is an array index , whose numeric value is greater than or equal to" ~> id) ~
      (", in descending numeric index order , do" ~> stmt)
    ) ^^ {
        case x ~ y ~ l ~ b =>
          val keys = getTemp
          val n = getTemp
          val c = getTemp
          val i = getTemp
          Inst(s"""{
            let $keys = (map-keys $y.SubMap [int-sorted])
            let $i = $keys.length
            while (< 0i $i) {
              $i = (- $i 1i)
              let $x = $keys[$i]
              let $n = (convert $x str2num)
              app $c = (IsArrayIndex $x)
              if (&& $c (! (< $n $l))) $b else {}
            }
          }""")
      }

  // append statements
  lazy val appendStmt: P[Inst] = ("append" | "add") ~> (
    (rep1sep(expr, sep("and")) <~ {
      "to" ~ opt("the end of") ~ opt("the list" ~ opt("of" ~ word ~ "in")) |||
        "as" ~ (("an" | "the last") ~ "element of" | "the last" ~ word ~ "elements of") ~ opt("the list" ~ opt("that is"))
    }) ~ expr ^^ {
      case ps ~ (i1 ~ y) =>
        val i0: List[Inst] = ps.map { case i ~ _ => i }.flatten
        val as: List[Inst] = ps.map { case _ ~ x => IAppend(x, y) }
        ISeq(i0 ++ i1 ++ as)
    } ||| (opt("in" ~ opt("list") ~ "order") ~ (opt("all") ~ "the" ~ (opt("code unit") ~ "elements" | "entries") ~ "of" | "each item in") ~> expr <~ "to the end of" ~ opt("the List")) ~ expr ^^ {
      case (i0 ~ l1) ~ (i1 ~ l2) =>
        val tempId = getTempId
        ISeq(i0 ++ i1 :+ forEachList(tempId, l1, IAppend(toERef(tempId), l2)))
    } ||| ("to" ~> expr <~ opt("the elements of")) ~ expr ^^ {
      case (i0 ~ l1) ~ (i1 ~ l2) =>
        val tempId = getTempId
        ISeq(i0 ++ i1 :+ forEachList(tempId, l2, IAppend(toERef(tempId), l1)))
    } ||| (expr <~ "as the last code unit of") ~ id ^^ {
      case (i ~ e) ~ x => ISeq(i :+ ILet(IRId(x), EBOp(OPlus, toERef(x), e)))
    }
  ) ||| presentAppendStmt

  // append for presented parameters
  lazy val presentAppendStmt: P[Inst] = (
    ("if" ~> id <~ "is present , append each of its elements to") ~ expr ^^ {
      case x ~ (i1 ~ y) =>
        val tempId = getTempId
        IIf(
          exists(toERef(x)),
          ISeq(i1 :+ forEachList(tempId, toERef(x), IAppend(toERef(tempId), y))),
          emptyInst
        )
    }
  )

  // insert statements
  lazy val insertStmt: P[Inst] = ("insert" ~> expr <~ "as the first element of") ~ expr ^^ {
    case (i0 ~ x) ~ (i1 ~ y) => ISeq(i0 ++ i1 :+ IPrepend(x, y))
  }

  // remove statements
  lazy val removeStmt: P[Inst] = (
    ("remove the first element from" ~> id) ~ opt(("and let" ~> id) <~ "be the value of" ~ ("that" | "the") ~ "element") ^^ {
      case l ~ x => {
        val popId = x match {
          case None => getTempId
          case Some(pid) => IRId(pid)
        }
        ILet(popId, EPop(toERef(l), EINum(0)))
      }
    } ||| ("let" ~> id <~ "be the first element of") ~ (id <~ "and remove that element from" ~ id) ^^ {
      case x ~ l => ILet(IRId(x), EPop(toERef(l), EINum(0)))
    } ||| "remove" ~ id ~ "from the front of" ~> id ^^ {
      case x => Inst(s"(pop $x 0i)")
    } ||| "remove the last element of" ~> id ^^ {
      case x => Inst(s"(pop $x (- $x.length 1i))")
    } ||| ("remove the" ~ ("own property with name" | "binding for") ~> id <~ "from") ~ id ^^ {
      case p ~ x => Inst(s"delete $x.SubMap[$p]")
    } ||| (
      "remove" ~> id <~ "from the execution context stack and restore" |
      "pop" ~> id <~ "from the execution context stack"
    ) <~ rest ^^ {
        case x => Inst(s"""{
          if (= $executionStack[(- $executionStack.length 1i)] $x) {
            (pop $executionStack (- $executionStack.length 1i))
          } else {}
          $context = $executionStack[(- $executionStack.length 1i)]
        }""")
      } ||| ("remove" ~ opt("all occurrences of") ~> id <~ "from") ~ (opt("the list of waiters in") ~> id) ^^ {
        case x ~ list =>
          val idx = getTemp
          Inst(s"""{
          let $idx = 0i
          while (< $idx $list.length)
            if (= $list[$idx] $x) (pop $list $idx)
            else $idx = (+ $idx 1i)
        }""")
      }
  )

  // suspend statements
  lazy val suspendStmt: P[Inst] = (
    "suspend" ~> id ~ opt("and remove it from the execution context stack") ^^ {
      case x ~ opt => suspend(x, !opt.isEmpty)
    } ||| {
      "suspend the currently running execution context" |
        "suspend the running execution context and remove it from the execution context stack"
    } ^^^ suspend(context)
  )

  // push statements
  lazy val pushStmt: P[Inst] = (
    "push" ~> expr <~ ("onto" | "on to") ~ "the execution context stack;" ~
    id ~ "is now the running execution context" ^^ {
      case i ~ e => ISeq(i ++ List(IAppend(e, toERef(executionStack)), Inst(s"""
        $context = $executionStack[(- $executionStack.length 1i)]
      """)))
    }
  )

  // resume statements
  lazy val resumeStmt: P[Inst] = basicResumeStmt ||| ctxtResumeStmt
  lazy val basicResumeStmt: P[Inst] = (
    ("Resume the suspended evaluation of" ~> id) ~
    ((opt("using" ~> expr <~ "as the result of the operation that suspended it") ^^ { _.toList }) <~ ".") ~
    (opt("Let" ~> id <~ "be the" ~ ("value" | "completion record") ~ "returned by the resumed computation .") ^^ { _.toList })
  ) ^^ {
      case cid ~ ies ~ rs => {
        val (is, es) = ies.map { case i ~ e => (i, e) }.unzip
        val tid = getTemp
        ISeq(is.flatten :+ Inst(s"""withcont $tid (${rs.mkString(", ")}) = {
          if (= $cid.ReturnCont absent) $cid.ReturnCont = (new []) else {}
          append $tid -> $cid.ReturnCont
          app _ = ($cid.ResumeCont ${es.mkString(" ")})
        }"""))
      }
    }
  lazy val ctxtResumeStmt: P[Inst] = (
    "Resume the context that is now on the top of the execution context stack as the running execution context"
  ) ^^^ { Inst(s"$context = $executionStack[(- $executionStack.length 1i)]") }

  // subtract statements
  lazy val subtractStmt: P[Inst] = (
    ("subtract" ~> expr <~ "from") ~ id ^^ {
      case (i ~ e) ~ x => ISeq(i :+ IAssign(toRef(x), e))
    }
  )

  // evaluate statements
  lazy val evaluateStmt: P[Inst] = (
    accessRef ~ ("to obtain" ~ opt("the" ~ word ~ "results:") ~> rep1sep(opt("a" | "an") ~ word ~ opt("(" ~ rep(normal.filter(_ != Text(")"))) ~ ")") ~> id, sep("and"))) ^^ {
      case (i ~ r) ~ List(x) =>
        ISeq(i :+ ILet(IRId(x), ERef(r)))
      case (i0 ~ r) ~ xs =>
        val i1 = xs.zipWithIndex.map { case (x, k) => ILet(IRId(x), ERef(RefProp(r, EINum(k)))) }
        ISeq(i0 ++ i1)
    }
  )

  // assert statements
  lazy val assertStmt: P[Inst] = (
    assertResumeStmt |
    ("assert:" | "note:") ~> cond <~ guard("." ~ next) ^^ { case i ~ e => ISeq(i :+ IAssert(e)) } |
    ("assert:" | "note:") ~> rest ^^^ emptyInst
  )
  lazy val assertResumeStmt: P[Inst] = (
    "Assert: If we return here, the" ~>
    ("async function" ^^^ "asyncContext" ||| opt("async") ~ "generator" ^^^ "genContext") <~
    "either threw an exception or performed" ~ opt("either") ~ "an implicit or explicit return" ~ rest
  ) ^^ { case x => Inst(s"$retcont = (pop $x.ReturnCont 0i)") }

  // optional statements
  lazy val optionalStmt: P[Inst] = ("optionally" ~ opt(",")) ~> stmt ^^^ emptyInst

  // assignment statements
  lazy val assignmentStmt: P[Inst] = opt(word) ~ rep1("=" ~> expr) ^^ {
    case x ~ rhs => getRet(rhs.last)
  } | (word ~ "(" ~ id ~ ")" ~ "=" ~> expr) ^^ {
    case ie => getRet(ie)
  }

  // continuation statements
  lazy val contStmt: P[Inst] = basicContStmt ||| complexContStmt
  lazy val basicContStmt: P[Inst] = (
    ("Set the code evaluation state of" ~> id) ~
    ("such that when evaluation is resumed" ~> ("with a Completion" ~> id ^^ { List(_) } | "for that execution context" ^^^ Nil)) ~
    ("the following steps will be performed:" ~> stmt)
  ) ^^ {
      case x ~ ps ~ s => {
        val t = getTempId
        ISeq(List(
          ICont(t, ps.map(IRId), s),
          IAssign(Ref(s"$x.ResumeCont"), toERef(t)),
        ))
      }
    }
  lazy val complexContStmt: P[Inst] = (
    ("Set the code evaluation state of" ~> id) ~
    ("such that when evaluation is resumed with a Completion" ~> id) <~
    (", the following steps of the algorithm that invoked Await will be performed, with" ~> id <~ "available.")
  ) ^^ {
      case x ~ y => {
        val t = getTemp
        Inst(s"""{
        $retcont = (pop $x.ReturnCont 0i)
        cont $t = ($y) [=>] return $y
        $x.ResumeCont = $t
      }""")
      }
    }

  // early errors
  lazy val earlyErrorStmt: P[Inst] = (("it is" | "always throw") ~ ("a syntax error" | "an early syntax error") ~ "if") ~> cond ^^ {
    case (i ~ c) => ISeq(i :+ IIf(c, IThrow("SyntaxError"), emptyInst))
  }

  lazy val earlyErrorCond: P[I[Expr]] = (
    rhsCond |||
    bopCond |||
    strictModeCond |||
    containsCond |||
    anyMatchCond |||
    moreThanOneOccurCond |||
    alsoOccurCond |||
    notSetCond |||
    notCoveringCond |||
    notGoalCond |||
    notAlsoOccurEitherCond |||
    notNestedCond
  ) // todo!: add more conds

  lazy val anyMatchCond = (opt("any") ~ "code matches this production" | "any source text matches this rule") ^^ {
    case _ => pair(Nil, EBool(true))
  }

  lazy val moreThanOneOccurCond: P[I[Expr]] = (expr ~ ("contains more than one occurrence of" ~> expr)) ^^ {
    case (i1 ~ e1) ~ (i2 ~ e2) => {
      val list = getTempId
      var target = getTempId
      val count = getTempId
      val idx = getTempId
      val result = getTempId
      val initInsts = List(
        ILet(list, e1),
        ILet(target, e2),
        ILet(count, EINum(0)),
        ILet(idx, EINum(0)),
        ILet(result, EBool(false))
      )
      val whileInst = IWhile(EBOp(OLt, toERef(idx), toERef(list, "length")), ISeq(List(
        IIf(
          EBOp(OEq, toERef(list, toERef(idx)), toERef(target)),
          IAssign(toRef(count), EBOp(OPlus, toERef(count), EINum(1))),
          emptyInst
        )
      )))
      val finalInst = IIf(
        EBOp(OLt, EINum(1), toERef(count)),
        IAssign(toRef(result), EBool(true)),
        emptyInst
      )
      val totalInsts = i1 ++ i2 ++ initInsts ++ List(whileInst, finalInst)
      pair(totalInsts, toERef(result))
    }
  }

  lazy val alsoOccurCond: P[I[Expr]] = (("any element of" ~> expr) ~ ("also occurs in" ~> expr)) ^^ {
    case (i1 ~ e1) ~ (i2 ~ e2) => {
      val list1 = getTempId
      val list2 = getTempId
      val idx = getTempId
      val jdx = getTempId
      val result = getTempId
      val initInsts = List(
        ILet(list1, e1),
        ILet(list2, e2),
        ILet(idx, EINum(0)),
        ILet(jdx, EINum(0)),
        ILet(result, EBool(false))
      )
      val innerWhile = IWhile(EBOp(OLt, toERef(jdx), toERef(list2, "length")), ISeq(List(
        IIf(
          EBOp(OEq, toERef(list1, toERef(idx)), toERef(list2, toERef(jdx))),
          IAssign(toRef(result), EBool(true)),
          emptyInst
        )
      )))
      val outerWhile = IWhile(EBOp(OLt, toERef(idx), toERef(list1, "length")), ISeq(List(
        IAssign(toRef(jdx), EINum(0)),
        innerWhile
      )))
      val totalInsts = i1 ++ i2 ++ initInsts ++ List(outerWhile)
      pair(totalInsts, toERef(result))
    }
  }

  lazy val notAlsoOccurEitherCond: P[I[Expr]] = (
    (("any element of" ~> expr) ~ ("does not also occur in either" ~> expr)) ~ ((opt(",") ~ "or") ~> expr)
  ) ^^ {
      case (i1 ~ e1) ~ (i2 ~ e2) ~ (i3 ~ e3) => {
        val list1 = getTempId
        val list2 = getTempId
        val list3 = getTempId
        val idx = getTempId
        val jdx = getTempId
        val result = getTempId
        val initInsts = List(
          ILet(list1, e1),
          ILet(list2, e2),
          ILet(list3, e3),
          ILet(idx, EINum(0)),
          ILet(jdx, EINum(0)),
          ILet(result, EBool(false))
        )
        def innerWhile(id: IRId): Inst = IWhile(
          EBOp(OLt, toERef(jdx), toERef(id, "length")),
          IIf(
            EBOp(OEq, toERef(list1, toERef(idx)), toERef(id, toERef(jdx))),
            IAssign(toRef(result), EBool(true)),
            emptyInst
          )
        )
        def outerWhile = IWhile(
          EBOp(OLt, toERef(idx), toERef(list1, "length")),
          ISeq(List(
            IAssign(toRef(jdx), EINum(0)),
            innerWhile(list2),
            IAssign(toRef(jdx), EINum(0)),
            innerWhile(list3)
          ))
        )
        val totalInsts = i1 ++ i2 ++ i3 ++ initInsts ++ List(outerWhile)
        pair(totalInsts, toERef(result))
      }
    }

  lazy val thisProdRefBase: P[String] = (
    (opt("the") ~ "code matched by this production") |||
    (opt("the") ~ "code that matches this production")
  ) ^^^ "this"

  // "if the [ something ] parameter was not set"
  // ex. `SubstitutionTemplate[Yield, Await, Tagged] : TemplateHead Expression[+In, ?Yield, ?Await] TemplateSpans[?Yield, ?Await, ?Tagged]`
  // ex. `It is a Syntax Error if the <sub>[Tagged]</sub> parameter was not set and |TemplateHead| Contains |NotEscapeSequence|.`
  lazy val notSetCond: P[I[Expr]] = (expr <~ "parameter was not set") ^^ {
    case e => pair(Nil, ENotSupported("`parameter was not set` case"))
  }

  // ex. `It is a Syntax Error if the syntactic goal symbol is not |Module|`
  lazy val notGoalCond: P[I[Expr]] =
    (((opt("the") ~ "syntactic goal symbol is not") ~> nt) |||
      ("the goal symbol of the syntactic grammar is" ~> nt)) ^^ {
        case x => {
          val result = getTempId
          val ifInst = IIf(
            EBOp(OEq, EAbsent, EParseSyntax(ERef(toRef("this")), EStr(x), Nil)),
            IAssign(toRef(result), EBool(true)),
            emptyInst
          )
          val totalInst = List(
            ILet(result, EBool(false)),
            ifInst
          )
          pair(totalInst, toERef(result))
        }
      }

  // ex. It is a Syntax Error if |CoverCallExpressionAndAsyncArrowHead| is not covering an |AsyncArrowHead|.
  // similar to coveredByExpr
  lazy val notCoveringCond: P[I[Expr]] = ((ref <~ ("is not covering" ~ opt("a" | "an"))) ~ nt) ^^ {
    case (i ~ r) ~ x => {
      val result = getTempId
      val ifInst = IIf(
        EBOp(OEq, EAbsent, EParseSyntax(ERef(r), EStr(x), Nil)),
        IAssign(toRef(result), EBool(true)),
        emptyInst
      )
      val totalInst = List(
        ILet(result, EBool(false)),
        ifInst
      )
      pair(totalInst, toERef(result))
    }
  }

  // ex. It is a Syntax Error if this |ContinueStatement| is not nested, directly or indirectly (but not crossing function boundaries), within an |IterationStatement|.
  // todo! : examine meaning of EParseSyntax and refactor
  lazy val notNestedCond =
    ((opt("this") ~> ref) ~ (("is not nested , directly or indirectly ( but not crossing function boundaries ) , within" ~ opt("a" | "an")) ~> nt)) ^^ {
      case (i ~ r) ~ x => {
        val result = getTempId
        val ifInst = IIf(
          EBOp(OEq, EAbsent, EParseSyntax(ERef(r), EStr(x), Nil)),
          IAssign(toRef(result), EBool(true)),
          emptyInst
        )
        val totalInst = List(
          ILet(result, EBool(false)),
          ifInst
        )
        pair(totalInst, toERef(result))
      }
    }

  ////////////////////////////////////////////////////////////////////////////////
  // Expressions
  ////////////////////////////////////////////////////////////////////////////////

  lazy val expr: P[I[Expr]] = (
    arithExpr ||| term
  )

  lazy val term: P[I[Expr]] = select(etcExpr, (
    "(" ~> expr <~ ")" |||
    pairExpr |||
    valueExpr |||
    returnIfAbruptExpr |||
    callExpr |||
    newExpr |||
    listExpr |||
    multiExpr |||
    listCopyExpr |||
    algorithmExpr |||
    accessExpr |||
    containsExpr |||
    coveredByExpr |||
    strConcatExpr |||
    stringExpr |||
    substrExpr |||
    syntaxExpr |||
    argumentExpr |||
    refExpr |||
    referenceExpr |||
    dateExpr |||
    mathValueExpr |||
    expValueExpr |||
    charExpr |||
    remainderExpr |||
    charSetExpr |||
    stateExpr |||
    integerExpr |||
    numericExpr |||
    operatorExpr |||
    primitiveExpr |||
    closureExpr |||
    getElemsExpr |||
    starExpr
  ))

  // arithmetic expressions
  lazy val arithExpr: P[I[Expr]] = (
    expr ~ rep1(bop ~ term) ^^ {
      case ie ~ ps => ps.foldLeft(ie) {
        case (i0 ~ l, b ~ (i1 ~ r)) => pair(i0 ++ i1, EBOp(b, l, r))
      }
    } ||| uop ~ expr ^^ {
      case None ~ (i ~ e) => pair(i, e)
      case Some(u) ~ (i ~ e) => pair(i, EUOp(u, e))
    }
  )
  lazy val bop: P[BOp] = (
    ("×" | "*") ^^^ OMul |
    "/" ^^^ ODiv |
    ("+" | "addition") ^^^ OPlus |
    ("-" | "minus" | "subtraction") ^^^ OSub |
    "modulo" ^^^ OUMod |
    ("&" | "bitwise AND") ^^^ OBAnd |
    ("^" | "bitwise exclusive OR (XOR)") ^^^ OBXOr |
    ("|" | "bitwise inclusive OR") ^^^ OBOr |
    ("**" | "raised to the power") ^^^ OPow
  )
  lazy val uop: P[Option[UOp]] = (
    "+" ^^^ None |
    ("-" | "the negation of") ^^^ Some(ONeg)
  )

  // pair expressions
  lazy val pairExpr: P[I[Expr]] = (
    (opt("the") ~ "pair" ~ opt("(a two element list)") ~ "consisting of" ~> id <~ "and") ~ id ^^ {
      case x ~ y => pair(Nil, Expr(s"(new [$x, $y])"))
    } ||| ("(" ~> id <~ ",") ~ id <~ ")" ^^ {
      case x ~ y => pair(Nil, Expr(s"(new [$x, $y])"))
    }
  )

  // value expressions
  lazy val valueExpr: P[I[Expr]] = valueParser ^^ { pair(Nil, _) }

  // ReturnIfAbrupt
  lazy val returnIfAbruptExpr: P[I[Expr]] = opt("the result of" ~ opt("performing")) ~> (
    ("?" ~> expr | "ReturnIfAbrupt(" ~> expr <~ ")") ^^ {
      case i ~ e => pair(i, EReturnIfAbrupt(e, true))
    } | "!" ~> expr ^^ {
      case i ~ e => pair(i, EReturnIfAbrupt(e, false))
    } | ("IfAbruptRejectPromise(" ~> expr <~ ", ") ~ (ref <~ ")") ^^ {
      case (i0 ~ e) ~ (i1 ~ r) => ifAbruptRejectPromise(i0 ++ i1, e, r)
    }
  )

  private def getCallExpr(
    base: I[Ref],
    args: List[I[Expr]],
    isPrim: Boolean = false
  ): I[Expr] =
    pair(base, args) match {
      case (_ ~ RefId(id)) ~ list if id.name == "ℝ" || id.name == "𝔽" => list.head
      case (_ ~ RefId(id)) ~ list if id.name == "ℤ" => list match {
        case (i ~ e) :: _ => pair(i, toBigInt(e))
        case _ => ???
      }
      case (i0 ~ (r: RefId)) ~ list => {
        val i1 ~ e = getCall(ERef(r), list)
        pair(i0 ++ i1, e)
      }
      case (i0 ~ (r @ RefProp(b, _))) ~ list => {
        val prev = if (isPrim) Nil else List(pair(Nil, ERef(b)))
        val i1 ~ e = getCall(ERef(r), prev ++ list)
        pair(i0 ++ i1, e)
      }
    }

  // call expressions
  lazy val callExpr: P[I[Expr]] = (
    "ParseText" ~ "(" ~> expr <~ "," ~ expr ~ ")" ^^ {
      case ie => ie
    } | callRef ~ ("(" ~> repsep(expr, ",") <~ ")") ^^ {
      case (i0 ~ RefId(IRId("Type"))) ~ List(i1 ~ a) =>
        pair(i0 ++ i1, ETypeOf(a))
      case b ~ as =>
        getCallExpr(b, as)
    } ||| {
      "the result of" ~ (rep(not("comparison") ~ word) ~ "comparison") ~>
        expr ~ compOp ~ expr ~ opt("with" ~ id ~ "equal to" ~> expr)
    } ^^ {
      case l ~ f ~ r ~ opt => getCall(toERef(f), List(l, r) ++ opt.toList)
    }
  )
  lazy val callRef: P[I[Ref]] = (
    notNumber |||
    "forin / ofheadevaluation" ^^^ { "ForInOfHeadEvaluation" } |||
    "forin / ofbodyevaluation" ^^^ { "ForInOfBodyEvaluation" }
  ) ^^ { forIn => pair(Nil, toRef(forIn)) } |||
    id ~ opt(callField) ^^ {
      case x ~ Some(y) => pair(Nil, toRef(x, y))
      case x ~ None => pair(Nil, toRef(x))
    }
  lazy val callField: P[Expr] = "." ~> (internalName | camelWord ^^ { EStr(_) })
  lazy val compOp: P[String] = (
    "==" ^^^ "AbstractEqualityComparison" |||
    "===" ^^^ "StrictEqualityComparison" |||
    "<" ^^^ "AbstractRelationalComparison"
  )

  // new expressions
  lazy val newExpr: P[I[Expr]] = (
    "a new Realm Record" ^^^ {
      pair(Nil, toERef(realm))
    } | ("a new" | "a newly created" | "the") ~> ty ~ opt(("with" | "that" | "containing") ~> extraFields) ^^ {
      case t ~ fs =>
        pair(Nil, EMap(t, fs.getOrElse(Nil)))
    } ||| "a newly created" ~> valueValue <~ "object" ^^ {
      case e => pair(Nil, e)
    } ||| opt("the" | "a" ~ opt("new")) ~> ty ~ ("{" ~> repsep((internalName <~ ":") ~ expr, ",") <~ "}") ^^ {
      case Ty("Completion") ~ list =>
        val i = list.map { case _ ~ (i ~ _) => i }.flatten
        val map = (list.map { case x ~ (_ ~ e) => (x, e) }).toMap
        val comp = EComp(map(EStr("Type")), map(EStr("Value")), map(EStr("Target")))
        pair(i, comp)
      case t ~ list =>
        val i = list.map { case _ ~ (i ~ _) => i }.flatten
        pair(i, EMap(t, list.map { case x ~ (_ ~ e) => (x, e) }))
    }
  )
  lazy val extraFields: P[List[(Expr, Expr)]] = (
    "a" ~> internalName <~ "internal slot" ^^ { case x => List(x -> EUndef) } |||
    "internal slots" ~> rep1sep(internalName, sep("and")) ^^ { case xs => xs.map(_ -> EUndef) } |||
    id <~ "as the binding object" ^^ { case x => List(EStr("BindingObject") -> toERef(x), EStr("withEnvironment") -> EBool(false)) } |||
    ("the internal slots listed in table" ~ number | opt("initially has") ~> "no fields" | "no bindings") ^^^ Nil
  )

  // list expressions
  lazy val listExpr: P[I[Expr]] = ("an empty set" | "a new empty list") ^^^ pair(Nil, EList(Nil)) ||| {
    // multiple expressions
    "«" ~> repsep(expr, ",") <~ "»" ||| ("a" ~ opt("new") ~ "list" ~ opt("containing")) ~> (
      opt("whose sole" ~ ("item" | "element") ~ "is" | "only" | ("the" ~ ("one" | "single") ~ "element" ~ opt("," | "which is"))) ~> expr ^^ { List(_) }
    )
  } ^^ { getList(_) } ||| {
    "a List whose first element is" ~> expr ~
      ("and whose subsequent elements are the elements of" ~> expr) <~ opt(rest)
  } ^^ { case (i0 ~ e0) ~ (i1 ~ e1) => pair(i0 ++ i1 :+ IPrepend(e0, e1), e1) }

  // multiple expressions
  lazy val multiExpr: P[I[Expr]] = (
    opt("the") ~ word ~ "results" ~> rep1sep(expr, sep("and")) ^^ {
      case xs =>
        val i = xs.map { case i ~ _ => i }.flatten
        val es = xs.map { case _ ~ e => e }
        pair(i, EList(es))
    }
  )

  // list copy expressions
  lazy val listCopyExpr: P[I[Expr]] = (
    "a new List which is a copy of" ~> expr ^^ { getCopyList(_, Nil) } |||
    "a copy of" ~ opt("the list") ~> expr ^^ { getCopyList(_, Nil) } |||
    ("a copy of" | "a new list of") ~> expr ~ ("with" ~> expr <~ "appended") ^^ { case x ~ y => getCopyList(x, List(y)) } |||
    "a copy of" ~ opt("the List") ~> (expr <~ "with all the elements of") ~ (expr <~ "appended") ^^ { case x ~ y => getCopyList(x, y) } |||
    ("a new list containing the same values as the list" ~> expr <~ "in the same order followed by the same values as the list") ~ (expr <~ "in the same order") ^^ { case x ~ y => getCopyList(x, y) } |||
    "a List whose elements are the elements of" ~> (
      (expr <~ opt(",") ~ "followed by the elements of") ~ expr ^^ { case ie0 ~ ie1 => getCopyList(ie0, ie1) } |||
      (expr <~ opt(",") ~ "followed by") ~ expr ^^ { case (i0 ~ e0) ~ (i1 ~ e1) => pair(i0 ++ i1 :+ IAppend(e1, e0), e0) }
    )
  )

  // algorithm expressions
  lazy val algorithmExpr: P[I[Expr]] = (
    "an empty sequence of algorithm steps" ^^^ toERef("EmptyFunction") |||
    "the algorithm steps" ~ ("specified" | "defined") ~ "in" ~> refBase ^^ { toERef(_) }
  ) ^^ { pair(Nil, _) }

  // access expressions
  lazy val accessExpr: P[I[Expr]] = accessRef ^^ { case i ~ r => pair(i, ERef(r)) }
  lazy val accessRef: P[I[Ref]] = (
    (opt("the result of" ~ opt("performing")) ~>
      (("evaluate" | "evaluating") ^^^ "Evaluation" | opt("the String value whose code units are the" | "the") ~> (camelWord | nt) <~ ("for" | "of")) ~ expr ~
      opt(("using" | "with" | "passing") ~ opt("arguments" | "argument" | "parameters" | "parameter") ~>
        repsep(expr <~ opt("as" ~ ("its" | "the optional") ~ id ~ "argument"), ", and" | "," | "and") <~
        opt("as" ~ opt("the") ~ ("arguments" | "argument")))) ^^ {
        case f ~ ix ~ optList => getAccess(f, ix, optList.getOrElse(Nil))
      }
  )

  // contains expressions
  lazy val containsExpr: P[I[Expr]] =
    opt("the result of") ~> ((id | nt) <~ camelWord.filter(_ == "Contains")) ~ (nt ^^ { EStr(_) } | id ^^ { toERef(_) }) ^^ {
      case x ~ y =>
        // `Contains` static semantics
        val tempId = getTempId
        pair(List(IAccess(tempId, toERef(x), EStr("Contains"), List(y))), toERef(tempId))
    }

  // ex. Let _assignmentPattern_ be the |AssignmentPattern| that is covered by |LeftHandSideExpression|
  // covered-by expressions
  lazy val coveredByExpr: P[I[Expr]] = ("the" ~> nt <~ "that is covered by") ~ ref ^^ {
    case x ~ (i ~ r) => pair(i, EParseSyntax(ERef(r), EStr(x), Nil))
  }

  // string-concatenation expressions
  lazy val strConcatExpr: P[I[Expr]] = (
    ("the" | "a") ~ opt(opt("new") ~ "string" ~ opt("-" | "that is the" ~ opt("result of") | "value" ~ opt(("formed" | "produced" | "computed") ~ "by")) | "result of") ~ (opt("the") ~ "concatenation of" | "concatenating" | "consisting" ~ opt("solely") ~ "of") ~> (
      opt(opt("the") ~ "Strings") ~> rep1sep(opt("the previous value of") ~> expr, sep("and")) |||
      opt(":") ~ in ~> rep1(expr <~ next | (rest ^^^ pair(Nil, ENotSupported("StringOp"))) <~ next) <~ out
    ) ^^ {
        case es => es.reduce[I[Expr]] {
          case (i0 ~ l, i1 ~ r) => pair(i0 ++ i1, EBOp(OPlus, l, r))
        }
      }
  )

  // string expressions
  lazy val stringExpr: P[I[Expr]] = (
    ("the String value" | "the" ~ opt("single-element") ~ "String") ~> expr ^^ {
      case ie => ie
    } ||| ("the code unit at index" ~> expr <~ "within") ~ ref ^^ {
      case (i0 ~ k) ~ (i1 ~ s) =>
        pair(i0 ++ i1, ERef(RefProp(s, k)))
    } ||| "the code unit" ~ ("whose value is" | "with code unit value") ~> expr
  )

  // substring expression
  lazy val substrExpr: P[I[Expr]] = (
    ("the substring of" ~> expr) ~ ("from" ~> expr) ~ ("to" ~> expr) ^^ {
      case (i0 ~ b) ~ (i1 ~ f) ~ (i2 ~ t) => {
        val (substr, idx, char) = (getTemp, getTemp, getTemp)
        val inst = Inst(s"""{
           let $substr = ""
           let $idx = $f
           while (< $idx $t) {
             access $char = ($b $idx)
             $substr = (+ $substr $char)
             $idx = (+ $idx 1i)
           }
         }""")
        pair(i0 ++ i1 ++ i2 ++ List(inst), toERef(substr))
      }
    }
  )

  // syntax expressions
  lazy val syntaxExpr: P[I[Expr]] =
    "the" ~> ("source text" | "code") ~ ("matched by" | "matching") ~> ref ^^ {
      case i ~ r => pair(i, EGetSyntax(ERef(r)))
    }

  // argument expressions
  lazy val argumentExpr: P[I[Expr]] = (
    "a List whose elements are the arguments passed to this function" |||
    "the List of arguments passed to this function" |||
    "a List containing the arguments passed to this function" |||
    "a List consisting of all of the arguments passed to this function" |||
    "a List whose elements are , in left to right order , the arguments that were passed to this function invocation" |||
    "the" ~ id ~ "that was passed to this function by [ [ Call ] ] or [ [ Construct ] ]"
  ) ^^^ { pair(Nil, toERef("argumentsList")) } ||| (
      "the" ~ opt("actual") ~ "number of" ~ opt("actual") ~ "arguments" ~ opt("passed to this function" ~ opt("call"))
    ) ^^^ { pair(Nil, toERef("argumentsList", "length")) }

  // reference expressions
  lazy val refExpr: P[I[Expr]] = ref ^^ {
    case i ~ r => pair(i, ERef(r))
  }

  // ECMAScript reference expressions
  lazy val referenceExpr: P[I[Expr]] = (
    ("a value of type reference whose base value component is" ~> expr) ~
    (", whose referenced name component is" ~> expr) ~
    (", and whose strict reference flag is" ~> expr) ^^ {
      case (i0 ~ b) ~ (i1 ~ r) ~ (i2 ~ s) => pair(i0 ++ i1 ++ i2, EMap(Ty("ReferenceRecord"), List(
        EStr("Base") -> b,
        EStr("ReferencedName") -> r,
        EStr("Strict") -> s
      )))
    } | ("a value of type Reference that is a Super Reference whose base value component is" ~> expr) ~
    (", whose referenced name component is" ~> expr) ~
    (", whose thisValue component is" ~> expr) ~
    (", and whose strict reference flag is" ~> expr) ^^ {
      case (i0 ~ b) ~ (i1 ~ r) ~ (i2 ~ t) ~ (i3 ~ s) => pair(i0 ++ i1 ++ i2 ++ i3, EMap(Ty("ReferenceRecord"), List(
        EStr("Base") -> b,
        EStr("ReferencedName") -> r,
        EStr("Strict") -> s,
        EStr("ThisValue") -> t,
      )))
    }
  )

  // Date expressions
  lazy val dateExpr: P[I[Expr]] = (
    dateConst ^^ { n => pair(Nil, ENum(n)) }
  )

  // Mathematical value expressions
  lazy val mathValueExpr: P[I[Expr]] = (
    ("ℝ" | "𝔽") ~> ("(" ~> expr <~ ")") ^^ { case i ~ e => pair(i, e) } |
    "ℤ" ~> ("(" ~> expr <~ ")") ^^ { case i ~ e => pair(i, toBigInt(e)) }
  )

  // Exponential expressions
  lazy val expValueExpr: P[I[Expr]] = (
    number ~ sup.filter(ts => parseAll(expr, ts).successful) ^^ {
      case x ~ ts => {
        val i ~ e = parseAll(expr, ts).get
        pair(i, EBOp(OPow, EINum(x.toLong), e))
      }
    }
  )

  // character expressions
  lazy val charExpr: P[I[Expr]] = (
    opt("the") ~ ("character" | "code point") ~ opt("whose" ~ ("character value" | "code") ~ "is" | "value of" | "matched by") ~> ("U+" ~> text <~ opt("(" ~ rep(normal.filter(_ != Text(")"))) ~ ")") ^^ {
      case s => pair(Nil, EStr(Character.toChars(Integer.parseInt(s, 16)).mkString))
    } | expr) ||| id <~ "'s" ~ ("character" | "code point") ~ "value" ^^ {
      case x => pair(Nil, toERef(x))
    }
  )

  // remainder expressions
  lazy val remainderExpr: P[I[Expr]] = (
    (opt("the") ~ "remainder of dividing" ~> expr) ~ ("by" ~> expr) ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, EBOp(OMod, x, y))
    }
  )

  // set expressions
  lazy val charSetExpr: P[I[Expr]] = (
    ("the union of CharSets" ~> expr <~ "and") ~ expr ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, EBOp(OPlus, x, y))
    } ||| (("a" | "the") ~ "one-element CharSet containing the character" | "the CharSet containing the" ~ opt("single" | "one") ~ "character" ~ opt("matched by" | "that is")) ~> expr ^^ {
      case i ~ e => pair(i, EList(List(e)))
    } ||| "the one character in CharSet" ~> id ^^ {
      case x => pair(Nil, Expr(s"$x[0i]"))
    } ||| "the CharSet that is" ~> expr ^^ {
      case ie => ie
    } ||| "the empty CharSet" ^^ {
      case _ => pair(Nil, EList(Nil))
    }
  )

  // state expressions
  lazy val stateExpr: P[I[Expr]] = (
    ("the state (" ~> expr <~ ",") ~ (expr <~ ")") ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(Nil, EList(List(x, y)))
    }
  )

  // integer expressions
  lazy val integerExpr: P[I[Expr]] = (
    "the" ~ ("mathematical" | "number") ~ "value that is the same sign as" ~> id <~ "and whose magnitude is floor(abs(" ~ (id | "ℝ(" ~ id ~ ")") ~ "))" ^^ {
      case x => pair(Nil, Expr(s"(convert $x num2int)"))
    }
  )

  // numeric quantified expressions
  lazy val numericExpr: P[I[Expr]] =
    ("the" ~> ("Number" ^^^ false | "BigInt" ^^^ true) <~ ("value" ~ ("for" | "that represents"))) ~ expr ^^ {
      case b ~ (i ~ e) => pair(i, if (b) toBigInt(e) else e)
    }

  // operator expressions
  lazy val operatorExpr: P[I[Expr]] = "the result of" ~> (
    ("applying the" ~> bop <~ opt("operator with" | "operation to")) ~ id ~ ("and" ~> id) <~ rest ^^ {
      case op ~ x ~ y => pair(Nil, EBOp(op, toERef(x), toERef(y)))
    } ||| ("applying bitwise complement to" ^^^ OBNot | "negating" ^^^ ONeg) ~ id <~ rest ^^ {
      case op ~ x => pair(Nil, EUOp(op, toERef(x)))
    } ||| ("left shifting" ^^^ OLShift | "performing a sign-extending right shift of" ^^^ OSRShift | "performing a zero-filling right shift of" ^^^ OURShift) ~ (id <~ "by") ~ id <~ "bits" ~ rest ^^ {
      case op ~ x ~ y => pair(Nil, EBOp(op, toERef(x), toERef(y)))
    } ||| "masking out all but the least significant 5 bits of" ~> id <~ rest ^^ {
      case x => pair(Nil, Expr(s"(& $x 31i)"))
    } ||| ("adding the value" ~> expr <~ "to" ^^ { (OPlus, _) } | "subtracting the value" ~> expr <~ "from" ^^ { (OSub, _) }) ~ expr <~ rest ^^ {
      case ((op, i0 ~ e)) ~ (i1 ~ b) => pair(i0 ++ i1, EBOp(op, b, e))
    }
  )

  lazy val primitiveExpr: P[I[Expr]] =
    (primitiveBase <~ "::") ~ word ~ opt("(" ~> repsep(expr, ",") <~ ")") ^^ {
      case ie ~ r ~ as =>
        val i ~ ref = toRef("PRIMITIVE", List(ie, pair(Nil, EStr(r))))
        as match {
          case None => pair(i, ERef(ref))
          case Some(as) => getCallExpr(pair(i, ref), as, isPrim = true)
        }
    }
  lazy val primitiveBase: P[I[Expr]] = (
    refBase ^^ { case x => pair(Nil, toERef(x)) } |||
    callExpr
  )

  lazy val dateConst: P[Int] = (
    "msPerDay" ^^^ msPerDay |
    "msPerHour" ^^^ msPerHour |
    "msPerMinute" ^^^ msPerMinute |
    "msPerSecond" ^^^ msPerSecond
  )
  val HoursPerDay = 24
  val MinutesPerHour = 60
  val SecondsPerMinute = 60
  val msPerDay = 86400000
  val msPerHour = 3600000
  val msPerMinute = 60000
  val msPerSecond = 1000

  // closure expressions
  lazy val closureExpr: P[I[Expr]] = (
    ("a new" ~ opt("job") ~ "abstract closure with" ~> ("no parameters" ^^^ Nil | "parameters (" ~> repsep(id, ",") <~ ")")) ~
    ("that captures" ~> repsep(id, sep("and")) <~ "and performs the following steps when called:") ~
    stmt
  ) ^^ {
      case ps ~ cs ~ b => {
        val t = getTempId
        pair(List(IClo(t, ps.map(IRId), cs.map(IRId), b)), toERef(t))
      }
    }

  // get-elems expressions
  lazy val getElemsExpr: P[I[Expr]] = (
    ("the list of" ~> nt) ~ ("items in" ~> expr <~ opt(", in source text order"))
  ) ^^ { case x ~ (i ~ e) => pair(i, EGetElems(e, x)) }

  ////////////////////////////////////////////////////////////////////////////////
  // values
  ////////////////////////////////////////////////////////////////////////////////
  lazy val valueParser: P[Expr] = (
    valueValue |||
    expValue |||
    codeValue |||
    constValue |||
    numberValue |||
    grammarValue |||
    absentValue |||
    hexValue |||
    activeFunctionValue |||
    stringValue |||
    internalName
  )

  // values with tag `value`
  lazy val valueValue: P[Expr] = opt("the value") ~> value ~ opt(sub) ^^ {
    case "undefined" ~ _ => EUndef
    case "NaN" ~ _ => ENum(Double.NaN)
    case "null" ~ _ => ENull
    case "+0" ~ _ => EINum(0L)
    case "-0" ~ _ => ENum(-0.0)
    case "true" ~ _ => EBool(true)
    case "false" ~ _ => EBool(false)
    case "+∞" ~ _ => ENum(Double.PositiveInfinity)
    case "-∞" ~ _ => ENum(Double.NegativeInfinity)
    case s ~ _ if s.startsWith("\"") && s.endsWith("\"") => EStr(s.slice(1, s.length - 1))
    case s ~ Some(List(Text("ℤ"))) if Try(s.toLong).isSuccess => EBigINum(BigInt(s.toLong))
    case s ~ _ if Try(s.toLong).isSuccess => EINum(s.toLong)
    case s ~ _ if Try(s.toDouble).isSuccess => ENum(s.toDouble)
    case s ~ _ if s.endsWith("n") && Try(s.dropRight(1).toLong).isSuccess => EBigINum(BigInt(s.dropRight(1).toLong))
    case err ~ _ if err.endsWith("Error") => getErrorObj(err)
    case s ~ _ => ENotSupported(s)
  }

  // exponential values
  lazy val expValue: P[Expr] = (
    number ~ sup.filter(ts => parseAll(number, ts).successful) ^^ {
      case x ~ List(y: Text) =>
        val a = x.toInt
        val b = y.getContent.toInt
        EINum(math.pow(a, b).longValue)
    }
  )

  // values with tag `code`
  lazy val codeValue: P[Expr] = opt("the" ~ ("code unit" | "element" | opt("single - element") ~ "string" ~ opt("value"))) ~> code <~ opt("(" ~ rep(normal.filter(_ != Text(")"))) ~ ")") ^^ {
    case s if s.startsWith("\"%") && s.endsWith("%\"") =>
      ERef(RefProp(toRef(INTRINSICS), EStr(s.slice(1, s.length - 1))))
    case s if s.startsWith("\"") && s.endsWith("\"") =>
      EStr(s.slice(1, s.length - 1))
    case s @ ("super" | "this" | "&" | "^" | "|" | "**" | "+" | "-" | ">>" | ">>>" | "<<" | "%" | "/" | "*") => EStr(s)
    case s if s.endsWith("n") => EBigINum(s.dropRight(1).toLong)
    case s => ENotSupported(s)
  }

  // values with tag `const`
  lazy val constValue: P[Expr] = const ^^ {
    case "[empty]" => EAbsent
    case const => EConst(const)
  }

  // number values
  lazy val numberValue: P[Expr] = opt("the numeric value") ~> (
    (number <~ ".") ~ number ^^ {
      case x ~ y => ENum(s"$x.$y".toDouble)
    } ||| opt("-") ~ number.filter(s => noExc(java.lang.Long.decode(s))) ^^ {
      case None ~ s => EINum(java.lang.Long.decode(s))
      case Some(_) ~ s => EINum(-java.lang.Long.decode(s))
    } ||| "zero" ^^^ { EINum(0L) }
    ||| ("∞" | "+∞") ^^^ ENum(Double.PositiveInfinity)
    ||| "-∞" ^^^ ENum(Double.NegativeInfinity)
  ) ||| "the" ~ opt("ECMAScript") ~ "Number value" ~ ("for" | "corresponding to" | "that corresponds to") ~> id ^^ { toERef(_) }

  // grammar values
  lazy val grammarValue: P[Expr] = "the grammar symbol" ~> nt ^^ {
    case x => EStr(x)
  }

  // absent values
  lazy val absentValue: P[Expr] =
    ("absent" | "not" ~ ("specified" | "passed" | "supplied" | "present" | "provided")) ^^^ EAbsent

  // hex values
  lazy val hexValue: P[Expr] =
    opt("the") ~> opt("code unit") ~> hex <~ opt("(" ~ rep(normal.filter(_ != Text(")"))) ~ ")") ^^ {
      case x => EStr(Character.toChars(x).mkString)
    } ||| hex ^^ { EINum(_) }
  lazy val hex: P[Int] = text.filter(_ startsWith "0x") ^^ {
    case s => Integer.parseInt(s.substring(2), 16)
  }

  // active function object
  lazy val activeFunctionValue: P[Expr] =
    "the active function" ~ opt("object") ^^^ toERef(context, "Function")

  // string values
  lazy val stringValue: P[Expr] =
    // 6e633e684ed8b12245e906593bdeb4969441f3bc
    "the empty string" ~ opt("value" | "( its length is" ~ ("0" | "zero") ~ ")") ^^^ EStr("")

  ////////////////////////////////////////////////////////////////////////////////
  // Conditions
  ////////////////////////////////////////////////////////////////////////////////
  lazy val cond: P[I[Expr]] = _cond <~ guard("repeat" | "," | in | "." | ";" | next | "and") | etcCond
  lazy val _cond: P[I[Expr]] = (
    boolLiteralCond |||
    argumentCond |||
    sameCond |||
    bopCond |||
    condOpCond |||
    noCommaCondOpCond |||
    rhsCond |||
    bothCond |||
    eitherCond |||
    strictModeCond |||
    ownKeyCond |||
    containsCond |||
    suppliedCond |||
    finiteCond |||
    suspendCond |||
    oddCond |||
    completionCond |||
    emptyCond |||
    duplicateCond |||
    astCond |||
    // TODO separate normal condition and early error condition
    earlyErrorCond
  )

  // boolean literal conditions
  lazy val boolLiteralCond: P[I[Expr]] = (value ^^ {
    case "true" => EBool(true)
    case "false" => EBool(false)
    case s => ENotSupported(s)
  }) ^^ { pair(Nil, _) }

  // conditions for arguments
  lazy val argumentCond: P[I[Expr]] = (
    ("no arguments were passed to this function invocation" | "only one argument was passed") ^^^ {
      pair(Nil, Expr("(= argumentsList.length 0i)"))
    }
  )

  // same conditions
  lazy val sameCond: P[I[Expr]] = {
    (expr <~ "and") ~ expr ^^ { case x ~ y => (x, y) } |||
      (opt("the") ~> weakFieldName <~ "and") ~ (weakFieldName <~ ("of" | "for")) ~ refBase ^^ {
        case f0 ~ f1 ~ b => (pair(Nil, toERef(b, f0)), pair(Nil, toERef(b, f1)))
      }
  } ~ ({
    "are" ~> opt("not") <~ "the same" ~ rep(camelWord) ~ opt("value" | "values") |||
      "have different results" ^^^ Some(Nil)
  }) ^^ {
    case (i0 ~ x, i1 ~ y) ~ None => pair(i0 ++ i1, EBOp(OEq, x, y))
    case (i0 ~ x, i1 ~ y) ~ Some(_) => pair(i0 ++ i1, not(EBOp(OEq, x, y)))
  }

  // binary operator conditions
  lazy val bopCond: P[I[Expr]] = (
    expr ~ condBOp ~ expr ^^ {
      case (i0 ~ x) ~ ((b, n, r)) ~ (i1 ~ y) => pair(i0 ++ i1, calc(n, r, b, x, y))
    } ||| expr ~ condBOp ~ expr ~ condBOp ~ expr ^^ {
      case (i0 ~ x) ~ ((b0, n0, r0)) ~ (i1 ~ y) ~ ((b1, n1, r1)) ~ (i2 ~ z) =>
        pair(i0 ++ i1 ++ i2, EBOp(OAnd, calc(n0, r0, b0, x, y), calc(n1, r1, b1, y, z)))
    }
  )
  lazy val condBOp: P[(BOp, Boolean, Boolean)] = (
    ("=") ^^^ (OEqual, false, false) |||
    ("≠") ^^^ (OEqual, true, false) |||
    ("is equal to" | "equals" | "is the same" ~ opt((opt(camelWord) ~ "value") | "sequence of code units") ~ "as") ^^^ (OEq, false, false) |||
    ("is not equal to" | "is different from") ^^^ (OEq, true, false) |||
    ("<" | "is less than") ^^^ (OLt, false, false) |||
    ("≥" | "is not less than" | "is greater than or equal to") ^^^ (OLt, true, false) |||
    (">" | "is greater than" | "is larger than") ^^^ (OLt, false, true) |||
    ("≤" | "is not greater than" | "is less than or equal to") ^^^ (OLt, true, true) |||
    "is not the ordinary object internal method defined in" ^^^ (OEq, true, false)
  )

  // conditional operators
  lazy val _condOpCond = (
    rhsCond |||
    bopCond |||
    containsCond |||
    strictModeCond |||
    sameCond |||
    finiteCond |||
    emptyCond |||
    duplicateCond |||
    earlyErrorCond
  )
  lazy val condOpCond: P[I[Expr]] = rep1sep(noCommaCondOpCond, ",") ~ ("," ~> condOp <~ opt("if")) ~ _cond ^^ {
    case il ~ ((op, _)) ~ (i1 ~ r) if il.tail.forall { case i ~ e => isEmptyInsts(i) } && isEmptyInsts(i1) => {
      val i ~ l = il.reduce[I[Expr]] {
        case ((i0 ~ x), (i1 ~ y)) => pair(i0 ++ i1, EBOp(op, x, y))
      }
      pair(i ++ i1, EBOp(op, l, r))
    }
    case il ~ ((op, f)) ~ ie => {
      var temp = getTempId
      val inst = (il :+ ie).foldRight(emptyInst) {
        case (i ~ expr, iacc) => {
          val (t, e) = f(iacc)
          val ifInst =
            if (isEmptyInsts(List(t, e))) emptyInst
            else IIf(toERef(temp), t, e)
          ISeq(i :+ IAssign(toRef(temp), expr) :+ ifInst)
        }
      }
      pair(List(ILet(temp, EBool(true)), inst), toERef(temp))
    }
  }
  lazy val noCommaCondOpCond: P[I[Expr]] = (
    getCondOpCond("or", OOr, orFunc) |||
    getCondOpCond("and", OAnd, andFunc)
  )
  private def getCondOpCond(
    sep: String,
    op: BOp,
    f: Inst => (Inst, Inst)
  ): P[I[Expr]] = rep1sep(_condOpCond, sep <~ opt("if")) ^^ {
    case il if il.tail.forall { case i ~ e => isEmptyInsts(i) } => {
      il.reduce[I[Expr]] {
        case ((i0 ~ x), (i1 ~ y)) => pair(i0 ++ i1, EBOp(op, x, y))
      }
    }
    case il => {
      var temp = getTempId
      val inst = il.foldRight(emptyInst) {
        case (i ~ expr, iacc) => {
          val (t, e) = f(iacc)
          val ifInst =
            if (isEmptyInsts(List(t, e))) emptyInst
            else IIf(toERef(temp), t, e)
          ISeq(i :+ IAssign(toRef(temp), expr) :+ ifInst)
        }
      }
      pair(List(ILet(temp, EBool(true)), inst), toERef(temp))
    }
  }
  val orFunc = (x: Inst) => (emptyInst, x)
  val andFunc = (x: Inst) => (x, emptyInst)
  lazy val condOp: P[(BOp, Inst => (Inst, Inst))] = (
    "or" ^^^ { (OOr, orFunc) } |||
    "and" ^^^ { (OAnd, andFunc) }
  )

  // right-hand side conditions
  lazy val rhsCond: P[I[Expr]] = expr ~ rep1sep(rhs, sep("or")) ^^ {
    case (i ~ r) ~ fs => concat(i, fs.map(_(r)).reduce[I[Expr]] {
      case ((i0 ~ x), (i1 ~ y)) => pair(i0 ++ i1, EBOp(OOr, x, y))
    })
  }
  lazy val rhs: P[Expr => I[Expr]] = equalRhs ||| notEqualRhs
  // TODO consider the condition(_cond) end with "." #180
  lazy val equalRhs: P[Expr => I[Expr]] = {
    ("is" | "was") ~ opt("present and" ~ ("its value is" | "has value")) | "has the value" | "are any of"
  } ~ opt("either") ~> rep1sep(rhsExpr <~ guard("," | ";" | "or" | "and" | in | ("." ~ next) | next), sep("or")) ^^ {
    case fs => (l: Expr) => fs.map(_(l)).reduce[I[Expr]] {
      case ((i0 ~ l), (i1 ~ r)) => pair(i0 ++ i1, EBOp(OOr, l, r))
    }
  } ||| {
    ("is" | "was") ~ opt("present and" ~ ("its value is" | "has value")) | "has the value" | "are any of"
  } ~ opt("either") ~> ("a" | "an") ~> rep1sep(rhsType <~ guard("," | ";" | "or" | "and" | in | ("." ~ next) | next), sep("or")) ^^ {
    case fs => (l: Expr) => fs.map(_(l)).reduce[I[Expr]] {
      case ((i0 ~ l), (i1 ~ r)) => pair(i0 ++ i1, EBOp(OOr, l, r))
    }
  }
  lazy val notEqualRhs: P[Expr => I[Expr]] = {
    "is" ~ ("not" ~ opt("the same value as" | "the same as" | "one of") | "neither")
  } ~> rep1sep(rhsExpr <~ guard("," | ";" | "or" | "and" | "nor" | in | ("." ~ next) | next), sep("nor" | "or")) ^^ {
    case fs => (l: Expr) => fs.map(_(l)).reduce[I[Expr]] {
      case ((i0 ~ l), (i1 ~ r)) => pair(i0 ++ i1, EBOp(OOr, l, r))
    } match { case i ~ e => pair(i, not(e)) }
  } ||| {
    "is" ~ ("not" ~ opt("the same value as" | "the same as" | "one of") | "neither")
  } ~> ("a" | "an") ~> rep1sep(rhsType <~ guard("," | ";" | "or" | "and" | "nor" | in | ("." ~ next) | next), sep("nor" | "or")) ^^ {
    case fs => (l: Expr) => fs.map(_(l)).reduce[I[Expr]] {
      case ((i0 ~ l), (i1 ~ r)) => pair(i0 ++ i1, EBOp(OOr, l, r))
    } match { case i ~ e => pair(i, not(e)) }
  }
  lazy val rhsExpr: P[Expr => I[Expr]] = (
    ("supplied" | "present") <~ opt("as a parameter") ^^^ { (e: Expr) => pair(Nil, isNEq(e, EAbsent)) } |||
    valueParser ^^ { case x => (e: Expr) => pair(Nil, isEq(e, x)) } |||
    "the token" ~> code ^^ { case y => (e: Expr) => pair(Nil, isEq(EGetSyntax(e), EStr(y))) } |||
    (id | camelWord) ^^ { case x => (e: Expr) => pair(Nil, isEq(e, toERef(x))) } |||
    callName ^^ { case f => (e: Expr) => getCall(f, List(pair(Nil, e))) } |||
    ("a completion" ~ opt("record")) ^^^ { (e: Expr) => pair(Nil, EIsCompletion(e)) } |||
    opt("a" | "an") ~> nt ^^ { case x => (e: Expr) => pair(Nil, EIsInstanceOf(e, x)) }
  )
  lazy val rhsType: P[Expr => I[Expr]] = (
    ty.filter(_ != Ty("Completion")) ^^ { case t => (e: Expr) => pair(Nil, EIsInstanceOf(e, t.name)) }
  )
  lazy val callName: P[String] = ("a" | "an") ~> (
    "array index" ^^^ "IsArrayIndex" |||
    "accessor property" ^^^ "IsAccessorDescriptor" |||
    "data property" ^^^ "IsDataDescriptor" |||
    "abrupt completion" ^^^ "IsAbruptCompletion"
  )

  // both conditions
  val bothCond: P[I[Expr]] =
    (opt("both") ~> expr <~ "and") ~ (expr <~ "are" ~ opt("both")) ~
      rep1sep(bothRhsExpr, sep("or" ~ opt("both"))) ^^ {
        case (i0 ~ x) ~ (i1 ~ y) ~ fs => concat(i0 ++ i1, fs.map(_(x, y)).reduce[I[Expr]] {
          case ((i0 ~ l), (i1 ~ r)) => pair(i0 ++ i1, EBOp(OOr, l, r))
        })
      }
  lazy val bothRhsExpr: P[(Expr, Expr) => I[Expr]] = (
    rhsExpr ^^ {
      case f => (l: Expr, r: Expr) => (f(l), f(r)) match {
        case (i0 ~ l, i1 ~ r) => pair(i0 ++ i1, EBOp(OAnd, l, r))
      }
    } ||| "the same" ~> camelWord <~ "value" ^^^ {
      (l: Expr, r: Expr) => pair(Nil, isEq(l, r))
    }
  )

  // either conditions
  val eitherCond: P[I[Expr]] =
    (opt("either") ~> expr <~ "or") ~ expr ~ rhs ^^ {
      case (i0 ~ x) ~ (i1 ~ y) ~ f => concat(i0 ++ i1, (f(x), f(y)) match {
        case (i0 ~ l, i1 ~ r) => pair(i0 ++ i1, EBOp(OOr, l, r))
      })
    }

  // strict mode conditions
  val strictModeCond: P[I[Expr]] = (
    "the Directive Prologue of FunctionStatementList contains a Use Strict Directive" |||
    opt("the source code matching" | "the function code for") ~ expr ~ "is strict mode code" |||
    "the directive prologue of statementList contains a use strict directive" |||
    "the code matching the syntactic production that is being evaluated is contained in strict mode code" |||
    "the code matched by the syntactic production that is being evaluated is strict mode code" |||
    refBase ~> "is contained in strict mode code" |||
    "the function code for" ~> ("this" ~> opt(nt | "this" | ty)) <~ "is strict mode code"
  ) ^^^ pair(Nil, EBool(true)) |||
    opt("the source code matching") ~ expr ~ "is non-strict code" ^^^ pair(Nil, EBool(false))

  // conditions for own key existence
  val ownKeyCond: P[I[Expr]] =
    (ref <~ "does not have an own property with key") ~ containsField <~ opt(containsPost) ^^ {
      case (i ~ r) ~ f => pair(i, isEq(ERef(RefProp(RefProp(r, EStr("SubMap")), f)), EAbsent))
    }

  // parse node conditions
  val astCond: P[I[Expr]] = (
    (expr <~ "is a Parse Node")
  ) ^^ { case i ~ e => pair(i, isEq(ETypeOf(e), EStr("AST"))) }

  // contains conditions
  val containsCond: P[I[Expr]] = (
    (ref <~ "does not have" ~ ("a" | "an")) ~ containsField <~ opt(containsPost) ^^ {
      case (i ~ r) ~ f => pair(i, isEq(ERef(RefProp(r, f)), EAbsent))
    } | (ref <~ ("has" | "have") <~ ("a" | "an")) ~ containsField <~ opt(containsPost) ^^ {
      case (i ~ r) ~ f => pair(i, isNEq(ERef(RefProp(r, f)), EAbsent))
    } ||| (expr <~ "does not" ~ ("contain" | "include")) ~ expr ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, not(EContains(x, y)))
    } ||| (expr <~ "contains") ~ expr ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, EContains(x, y))
    } ||| (expr <~ "is not" ~ ("in" | "an element of")) ~ expr ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, not(EContains(y, x)))
    } ||| (expr <~ "is" ~ ("in" | "an element of")) ~ expr ^^ {
      case (i0 ~ x) ~ (i1 ~ y) => pair(i0 ++ i1, EContains(y, x))
    } ||| containsExpr
  )
  lazy val containsField: P[Expr] = id ^^ toERef | fieldName
  lazy val containsPost: P[String] =
    ("field" | "internal" ~ ("slot" | "method") | "component") ^^^ ""

  // supplied conditions
  lazy val suppliedCond: P[I[Expr]] = opt("argument") ~> id <~ "was" ~ ("supplied" | "passed" ~ opt("as a parameter")) ^^ {
    case x => pair(Nil, isNEq(toERef(x), EAbsent))
  }

  // finite conditions
  lazy val finiteCond: P[I[Expr]] = (
    expr <~ "is finite" ^^ {
      case i ~ e => pair(i, isFinite(e))
    } ||| expr <~ "is not finite" ^^ {
      case i ~ e => pair(i, not(isFinite(e)))
    }
  )

  // suspend conditions
  lazy val suspendCond: P[I[Expr]] = (
    expr <~ "is not already suspended" ^^ {
      case i ~ e => pair(i, EBOp(OEq, e, ENull))
    }
  )

  // odd conditions
  lazy val oddCond: P[I[Expr]] = (
    expr <~ "is odd" ^^ {
      case i ~ e => pair(i, EBOp(OEq, EBOp(OMod, e, EINum(2)), EINum(1)))
    }
  )

  // completion conditions
  lazy val completionCond: P[I[Expr]] = (
    expr <~ "is a normal completion" ^^ {
      case i ~ x => pair(i, Expr(s"""(&& (is-completion $x) (= $x.Type ~normal~))"""))
    }
  )

  // empty conditions
  lazy val emptyCond: P[I[Expr]] = (
    ref <~ ("has no elements" | "is empty" | "is an empty list") ^^ {
      case i ~ r => pair(i, isEq(ERef(RefProp(r, EStr("length"))), EINum(0)))
    } ||| ref <~ ("is not empty" | "has any elements" | "is not an empty list") ^^ {
      case i ~ r => pair(i, EBOp(OLt, EINum(0), ERef(RefProp(r, EStr("length")))))
    }
  )

  // duplicate conditions
  lazy val duplicateCond: P[I[Expr]] = (expr <~ (("contains" | "has") ~ "any duplicate" ~ ("elements" | "entries"))) ^^ {
    case i0 ~ e => {
      val tempId = getTempId
      val i1 = List(IApp(tempId, toERef("IsDuplicate"), List(e)))
      pair(i0 ++ i1, toERef(tempId))
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Types
  ////////////////////////////////////////////////////////////////////////////////
  lazy val ty: P[Ty] = (
    "AsyncGeneratorRequest" ^^^ "AsyncGeneratorRequest" |||
    "Cyclic Module Record" ^^^ "CyclicModuleRecord" |||
    "ExportEntry Record" ^^^ "ExportEntryRecord" |||
    "ImportEntry Record" ^^^ "ImportEntryRecord" |||
    "PromiseCapability" ^^^ "PromiseCapability" |||
    "PromiseCapability Record" ^^^ "PromiseCapabilityRecord" |||
    "ResolvedBinding Record" ^^^ "ResolvedBindingRecord" |||
    "PromiseReaction" ^^^ "PromiseReaction" |||
    "Data Block" ^^^ "DataBlock" |||
    "Shared Data Block" ^^^ "SharedDataBlock" |||
    "Source Text Module Record" ^^^ "SourceTextModuleRecord" |||
    "ReadSharedMemory" <~ opt("event") ^^^ "ReadSharedMemory" |||
    "WriteSharedMemory" <~ opt("event") ^^^ "WriteSharedMemory" |||
    "ReadModifyWriteSharedMemory" <~ opt("event") ^^^ "ReadModifyWriteSharedMemory" |||
    "arguments exotic object" ^^^ "ArgumentsExoticObject" |||
    "array exotic object" ^^^ "ArrayExoticObject" |||
    "bound function exotic object" ^^^ "BoundFunctionExoticObject" |||
    "ECMAScript function" ~ opt("object") ^^^ "ECMAScriptFunctionObject" |||
    "built-in function object" ^^^ "BuiltinFunctionObject" |||
    "chosen value record" ^^^ "ChosenValueRecord" |||
    "completion" ~ opt("record") ^^^ "Completion" |||
    "environment record" ^^^ "EnvironmentRecord" |||
    "declarative environment record" ^^^ "DeclarativeEnvironmentRecord" |||
    "function environment record" ^^^ "FunctionEnvironmentRecord" |||
    "global environment record" ^^^ "GlobalEnvironmentRecord" |||
    "lexical environment" ^^^ "LexicalEnvironment" |||
    "module environment record" ^^^ "ModuleEnvironmentRecord" |||
    "object environment record" ^^^ "ObjectEnvironmentRecord" |||
    "object" ^^^ "OrdinaryObject" |||
    "pendingjob" ^^^ "PendingJob" |||
    "property descriptor" ^^^ "PropertyDescriptor" |||
    "propertydescriptor" ^^^ "PropertyDescriptor" |||
    "proxy exotic object" ^^^ "ProxyExoticObject" |||
    "realm record" ^^^ "RealmRecord" |||
    "record" ^^^ "Record" |||
    "script record" ^^^ "ScriptRecord" |||
    "jobcallback record" ^^^ "JobCallbackRecord" |||
    ("exotic String object" | "string exotic object") ^^^ "StringExoticObject" |||
    "reference record" ^^^ "ReferenceRecord" |||
    opt("ecmascript code") ~ "execution context" ^^^ "ExecutionContext"
  ) ^^ { case s => Ty(s) }

  ////////////////////////////////////////////////////////////////////////////////
  // References
  ////////////////////////////////////////////////////////////////////////////////
  lazy val ref: P[I[Ref]] = opt(refPre) ~> opt("the") ~> (
    linkRef |||
    typedArrayRef |||
    boundValueRef |||
    ordinalRef |||
    ownKeyRef |||
    topElemRef |||
    lastElemRef |||
    fieldRef |||
    lengthRef |||
    flagRef |||
    intrinsicsRef
  )

  // link-based references
  lazy val linkRef: P[I[Ref]] = link.filter(secIds contains _) ^^ {
    case secId =>
      val name = secIds(secId)
      val ref = Ref(s"""ALGORITHM["$name"]""")
      pair(Nil, ref)
  }

  // references for TypedArray
  lazy val typedArrayRef: P[I[Ref]] = (
    (opt(camelWord ~ "value of") ~ opt("the") ~> rep1(camelWord) <~ opt("value") ~ opt("specified") ~ "in table" ~ number ~ "for" ~ opt("element type")) ~ id ^^ {
      case fs ~ x => pair(Nil, Ref(s"$typedArrayInfo[$x].${fs.mkString}"))
    }
  )

  // references with fields
  lazy val fieldRef: P[I[Ref]] = (
    (fieldName <~ ("of" | "for")) ~ refBase ^^ {
      case f ~ b => pair(Nil, toRef(b, f))
    } ||| (refBase <~ "'s") ~ weakFieldName <~ opt("value" | "attribute" | "list") ^^ {
      case b ~ x => pair(Nil, RefProp(RefId(IRId(b)), x))
    } ||| refBase ~ rep(field) ^^ {
      case x ~ es => toRef(x, es)
    }
  )

  // bound value references
  lazy val boundValueRef: P[I[Ref]] = (("bound value for" | "value currently bound to") ~> id <~ "in") ~ id ^^ {
    case x ~ y => pair(Nil, Ref(s"$y.SubMap[$x].BoundValue"))
  }

  // ordinal references
  lazy val ordinalRef: P[I[Ref]] = (ordinal <~ ("element of" | text ~ "in")) ~ (accessRef ||| ref) ^^ {
    case k ~ (i ~ r) => pair(i, RefProp(r, EINum(k)))
  }

  // own key references
  lazy val ownKeyRef: P[I[Ref]] = (refBase <~ "'s own property whose key is") ~ id ^^ {
    case b ~ p => pair(Nil, RefProp(toRef(b, "SubMap"), toERef(p)))
  }

  // top elements references
  lazy val topElemRef: P[I[Ref]] = ordinal ~ ("to top element of" ~> ref) ^^ {
    case k ~ (i ~ r) => pair(i, RefProp(r, EBOp(OSub, ERef(RefProp(r, EStr("length"))), EINum(k + 1))))
  }

  // last elements references
  lazy val lastElemRef: P[I[Ref]] = "last element in" ~> ref ^^ {
    case i ~ r => pair(i, RefProp(r, EBOp(OSub, ERef(RefProp(r, EStr("length"))), EINum(1))))
  }

  // length references
  lazy val lengthRef: P[I[Ref]] = (
    "length of" ~> ref |||
    "number of" ~ (opt("code unit") ~ "elements" | "code units") ~ ("in" | "of") ~ opt("the List") ~> ref
  ) ^^ { case i ~ r => pair(i, RefProp(r, EStr("length"))) }

  // flag references
  lazy val flagRef: P[I[Ref]] = (id <~ "flag of") ~ ref ^^ {
    case x ~ (i ~ r) if x == "withEnvironment" => pair(i, RefProp(r, EStr(x)))
  }

  // intrinsics references
  lazy val intrinsicsRef: P[I[Ref]] =
    opt("the") ~> opt("intrinsic" ~ ("object" | "function")) ~> intrinsicsName ^^ {
      case intrin => pair(Nil, RefProp(toRef(INTRINSICS), intrin))
    }

  lazy val refBase: P[String] = opt("the") ~ opt("corresponding") ~> (
    "surrounding agent's agent record" ^^^ agent |||
    "agent record of the surrounding agent" ^^^ agent |||
    "running execution context" ^^^ context |||
    "GlobalSymbolRegistry list" ^^^ symbolRegistry |||
    "current Realm Record" ^^^ realm |||
    "arguments object" ^^^ "args" |||
    "execution context stack" ^^^ executionStack |||
    ty ~ "for which the method was invoked" ^^^ "this" |||
    "this" ~ opt(nt | "this" | ty | camelWord ~ "object") ^^^ "this" |||
    value.filter(_ == "this") ~ "value" ^^^ "this" |||
    "reference" ~> id |||
    symbolName |||
    camelWord |||
    opt(ordinal) ~ nt ^^ { case k ~ x => x + k.getOrElse("") } |||
    opt("argument" | opt("single") ~ "code" ~ ("unit" | "units") ~ opt("of") | "reference" | nt) ~> id <~ opt("flag" | "argument") |||
    thisProdRefBase
  )
  lazy val refPre: P[Unit] = opt("the") ~> (
    "hint" |||
    "list that is" ~ opt("the value of") |||
    "string" ~ opt("value") ~ ("of" | "containing only") |||
    "value of" |||
    "parsed code that is" |||
    "code unit"
  ) ^^^ ()
  lazy val ordinal: P[Int] = opt("the") ~> (
    ("sole" | "first") ^^^ 0 |
    "second" ^^^ 1 |
    "third" ^^^ 2
  )
  lazy val field: P[I[Expr]] = (
    "." ~> ("[[" ~> intrinsicsName <~ "]]") ^^ {
      case intrin => pair(Nil, intrin)
    } | "." ~> internalName ^^ {
      case x => pair(Nil, x)
    } | "[" ~> expr <~ "]" ^^ {
      case i ~ e => pair(i, e)
    }
  )
  lazy val weakFieldName: P[Expr] = fieldName ||| (camelWord | id) ^^ { EStr(_) }
  lazy val fieldName: P[Expr] = opt("the") ~> (
    "base value component" ^^^ "Base" |||
    "thisValue component" ^^^ "ThisValue" |||
    "outer environment reference" ^^^ "OuterEnv" |||
    "outer lexical environment reference" ^^^ "OuterEnv" |||
    "strict reference flag" ^^^ "Strict" |||
    "referenced name component" ^^^ "ReferencedName" |||
    "binding object" ^^^ "BindingObject" |||
    camelWord <~ ("fields" | "component")
  ) ^^ { EStr(_) } ||| {
      opt("the") ~> internalName <~ opt("field" | "internal" ~ ("method" | "slot"))
    }
  ////////////////////////////////////////////////////////////////////////////////
  // Names
  ////////////////////////////////////////////////////////////////////////////////
  lazy val name: P[String] = refBase
  lazy val symbolName: P[String] =
    "@@" ~> word ^^ { case x => s"SYMBOL_$x" }
  lazy val internalName: P[Expr] =
    "[[" ~> (symbolName ||| word) <~ "]]" ^^ { EStr(_) }
  lazy val intrinsicsName: P[Expr] = "%" ~> rep1sep(word, ".") <~ "%" ^^ {
    case ws => EStr(s"%${ws.mkString(".")}%")
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Etc parsers
  ////////////////////////////////////////////////////////////////////////////////
  // etc statements
  lazy val etcStmt: P[Inst] = failure("")

  // etc expressions
  lazy val etcExpr: P[I[Expr]] = failure("")

  // etc conditions
  lazy val etcCond: P[I[Expr]] = failure("")

  ////////////////////////////////////////////////////////////////////////////////
  // Helper
  ////////////////////////////////////////////////////////////////////////////////
  def expr2inst(parser: P[I[Expr]]): P[Inst] = parser ^^ {
    case Nil ~ e => IExpr(e)
    case i ~ e => ISeq(i :+ IExpr(e))
  }
  def ref2inst(parser: P[I[Ref]]): P[Inst] = parser ^^ {
    case Nil ~ r => IExpr(ERef(r))
    case i ~ r => ISeq(i :+ IExpr(ERef(r)))
  }
}

object Compiler {
  private var versionMap: Map[String, Compiler] = Map()
  def apply(
    version: String,
    secIds: Map[String, String]
  ): Compiler = versionMap.getOrElse(version, {
    var compiler = new Compiler(version, secIds)
    versionMap += version -> compiler
    compiler
  })
}
