var _marked = /*#__PURE__*/regeneratorRuntime.mark(ref);

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-ref-prior.case
// - src/function-forms/default/gen-func-decl.template

/*---
description: Referencing a parameter that occurs earlier in the ParameterList (generator function declaration)
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

    1. Let status be the result of performing IteratorBindingInitialization for
       FormalsList using iteratorRecord and environment as the arguments.
    2. ReturnIfAbrupt(status).
    3. Return the result of performing IteratorBindingInitialization for
       FormalParameter using iteratorRecord and environment as the arguments.

---*/
var x = 0;
var callCount = 0; // Stores a reference `ref` for case evaluation

function ref(x) {
  var y,
      z,
      _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          y = _args.length > 1 && _args[1] !== undefined ? _args[1] : x;
          z = _args.length > 2 && _args[2] !== undefined ? _args[2] : y;
          assert.sameValue(x, 3, 'first argument value');
          assert.sameValue(y, 3, 'second argument value');
          assert.sameValue(z, 3, 'third argument value');
          callCount = callCount + 1;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

ref(3).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');