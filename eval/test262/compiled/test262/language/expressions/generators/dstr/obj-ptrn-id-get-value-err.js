// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-get-value-err.case
// - src/dstr-binding/error/gen-func-expr.template

/*---
description: Error thrown when accessing the corresponding property of the value object (generator function expression)
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [generators, destructuring-binding]
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

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    4. Let v be GetV(value, propertyName).
    5. ReturnIfAbrupt(v).
---*/
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function get() {
    throw new Test262Error();
  }
});
var f = /*#__PURE__*/regeneratorRuntime.mark(function f(_ref) {
  var poisoned;
  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          poisoned = _ref.poisoned;

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, f);
});
assert["throws"](Test262Error, function () {
  f(poisonedProperty);
});