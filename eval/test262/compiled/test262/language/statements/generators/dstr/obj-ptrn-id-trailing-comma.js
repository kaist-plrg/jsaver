var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-trailing-comma.case
// - src/dstr-binding/default/gen-func-decl.template

/*---
description: Trailing comma is allowed following BindingPropertyList (generator function declaration)
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [generators, destructuring-binding]
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

    13.3.3 Destructuring Binding Patterns

    ObjectBindingPattern[Yield] :
        { }
        { BindingPropertyList[?Yield] }
        { BindingPropertyList[?Yield] , }
---*/
var callCount = 0;

function f(_ref) {
  var x;
  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          x = _ref.x;
          assert.sameValue(x, 23);
          callCount = callCount + 1;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
f({
  x: 23
}).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');