// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj.case
// - src/dstr-binding/default/gen-func-expr-dflt.template

/*---
description: Object binding pattern with "nested" object binding pattern not using initializer (generator function expression (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [generators, destructuring-binding, default-parameters]
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

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
var callCount = 0;
var f;
f = /*#__PURE__*/regeneratorRuntime.mark(function f() {
  var _ref,
      _ref$w,
      x,
      y,
      z,
      _args = arguments;

  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
            w: {
              x: undefined,
              z: 7
            }
          }, _ref$w = _ref.w;
          _ref$w = _ref$w === void 0 ? {
            x: 4,
            y: 5,
            z: 6
          } : _ref$w;
          x = _ref$w.x, y = _ref$w.y, z = _ref$w.z;
          assert.sameValue(x, undefined);
          assert.sameValue(y, undefined);
          assert.sameValue(z, 7);
          assert["throws"](ReferenceError, function () {
            w;
          });
          callCount = callCount + 1;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, f);
});
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');