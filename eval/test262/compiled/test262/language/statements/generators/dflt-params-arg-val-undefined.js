var _marked = /*#__PURE__*/regeneratorRuntime.mark(ref);

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-arg-val-undefined.case
// - src/function-forms/default/gen-func-decl.template

/*---
description: Use of initializer when argument value is `undefined` (generator function declaration)
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [default-parameters, generators]
flags: [generated]
info: |
    GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

        [...]
        2. Let F be GeneratorFunctionCreate(Normal, FormalParameters,
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
var callCount = 0; // Stores a reference `ref` for case evaluation

function ref() {
  var fromLiteral,
      fromExpr,
      fromHole,
      _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fromLiteral = _args.length > 0 && _args[0] !== undefined ? _args[0] : 23;
          fromExpr = _args.length > 1 && _args[1] !== undefined ? _args[1] : 45;
          fromHole = _args.length > 2 && _args[2] !== undefined ? _args[2] : 99;
          assert.sameValue(fromLiteral, 23);
          assert.sameValue(fromExpr, 45);
          assert.sameValue(fromHole, 99);
          callCount = callCount + 1;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

ref(undefined, void 0).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');