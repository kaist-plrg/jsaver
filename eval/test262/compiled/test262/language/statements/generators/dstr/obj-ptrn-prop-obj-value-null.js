var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj-value-null.case
// - src/dstr-binding/error/gen-func-decl.template

/*---
description: Object binding pattern with "nested" object binding pattern taking the `null` value (generator function declaration)
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

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
function f(_ref) {
  var _ref$w, x, y, z;

  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$w = _ref.w;
          _ref$w = _ref$w === void 0 ? {
            x: 4,
            y: 5,
            z: 6
          } : _ref$w;
          x = _ref$w.x, y = _ref$w.y, z = _ref$w.z;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

assert["throws"](TypeError, function () {
  f({
    w: null
  });
});