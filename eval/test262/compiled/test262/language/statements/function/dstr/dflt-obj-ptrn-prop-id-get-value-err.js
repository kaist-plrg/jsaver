// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-get-value-err.case
// - src/dstr-binding/error/func-decl-dflt.template

/*---
description: Error thrown when accessing the corresponding property of the value object (function declaration (default parameter))
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
features: [destructuring-binding, default-parameters]
flags: [generated]
info: |
    FunctionDeclaration :
        function BindingIdentifier ( FormalParameters ) { FunctionBody }

        [...]
        3. Let F be FunctionCreate(Normal, FormalParameters, FunctionBody,
           scope, strict).
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

    BindingElement : BindingPattern Initializeropt

    1. Let v be GetV(value, propertyName).
    2. ReturnIfAbrupt(v).
---*/
var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function get() {
    throw new Test262Error();
  }
});

function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : poisonedProperty,
      _ref$poisoned = _ref.poisoned,
      x = _ref$poisoned === void 0 ? ++initEvalCount : _ref$poisoned;
}

assert["throws"](Test262Error, function () {
  f();
});
assert.sameValue(initEvalCount, 0);