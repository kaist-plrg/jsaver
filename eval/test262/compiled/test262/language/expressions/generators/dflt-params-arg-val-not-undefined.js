// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-arg-val-not-undefined.case
// - src/function-forms/default/gen-func-expr.template

/*---
description: Use of initializer when argument value is not `undefined` (generator function expression)
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [default-parameters, generators]
flags: [generated]
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

        [...]
        3. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]


    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    [...]
    23. Let iteratorRecord be Record {[[Iterator]]:
        CreateListIterator(argumentsList), [[Done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        a. Perform ? IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

---*/
var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0; // Stores a reference `ref` for case evaluation

var ref;
ref = /*#__PURE__*/regeneratorRuntime.mark(function ref() {
  var aFalse,
      aString,
      aNaN,
      a0,
      aNull,
      aObj,
      _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          aFalse = _args.length > 0 && _args[0] !== undefined ? _args[0] : falseCount += 1;
          aString = _args.length > 1 && _args[1] !== undefined ? _args[1] : stringCount += 1;
          aNaN = _args.length > 2 && _args[2] !== undefined ? _args[2] : nanCount += 1;
          a0 = _args.length > 3 && _args[3] !== undefined ? _args[3] : zeroCount += 1;
          aNull = _args.length > 4 && _args[4] !== undefined ? _args[4] : nullCount += 1;
          aObj = _args.length > 5 && _args[5] !== undefined ? _args[5] : objCount += 1;
          assert.sameValue(aFalse, false);
          assert.sameValue(aString, '');
          assert.sameValue(aNaN, NaN);
          assert.sameValue(a0, 0);
          assert.sameValue(aNull, null);
          assert.sameValue(aObj, obj);
          callCount = callCount + 1;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, ref);
});
ref(false, '', NaN, 0, null, obj).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');