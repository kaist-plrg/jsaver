// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj-value-undef.case
// - src/dstr-binding/error/func-expr-dflt.template

/*---
description: Object binding pattern with "nested" object binding pattern taking the `null` value (function expression (default parameter))
esid: sec-function-definitions-runtime-semantics-evaluation
features: [destructuring-binding, default-parameters]
flags: [generated]
info: |
    FunctionExpression : function ( FormalParameters ) { FunctionBody }

        [...]
        3. Let closure be FunctionCreate(Normal, FormalParameters, FunctionBody,
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

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
var f = function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$w = _ref.w;

  _ref$w = _ref$w === void 0 ? undefined : _ref$w;
  var x = _ref$w.x,
      y = _ref$w.y,
      z = _ref$w.z;
};

assert["throws"](TypeError, function () {
  f();
});