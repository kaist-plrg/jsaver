var _marked = /*#__PURE__*/regeneratorRuntime.mark(ref);

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-trailing-comma.case
// - src/function-forms/default/gen-func-decl.template

/*---
description: A trailing comma should not increase the respective length, using default parameters (generator function declaration)
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [generators]
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


    Trailing comma in the parameters list

    14.1 Function Definitions

    FormalParameters[Yield, Await] : FormalParameterList[?Yield, ?Await] ,
---*/
var callCount = 0; // Stores a reference `ref` for case evaluation

function ref(a) {
  var b,
      _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          b = _args.length > 1 && _args[1] !== undefined ? _args[1] : 39;
          assert.sameValue(a, 42);
          assert.sameValue(b, 39);
          callCount = callCount + 1;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

ref(42, undefined, 1).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');