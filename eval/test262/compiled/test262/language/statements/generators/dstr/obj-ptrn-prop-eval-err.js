var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-eval-err.case
// - src/dstr-binding/error/gen-func-decl.template

/*---
description: Evaluation of property name returns an abrupt completion (generator function declaration)
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

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingProperty : PropertyName : BindingElement

    1. Let P be the result of evaluating PropertyName
    2. ReturnIfAbrupt(P).
---*/
function thrower() {
  throw new Test262Error();
}

function f(_ref) {
  var x;
  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          x = _ref[thrower()];

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

assert["throws"](Test262Error, function () {
  f({});
});