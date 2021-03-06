// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id.case
// - src/dstr-binding/default/func-expr-dflt.template

/*---
description: Binding as specified via property name and identifier (function expression (default parameter))
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

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    8. Return InitializeReferencedBinding(lhs, v).
---*/
var callCount = 0;
var f;

f = function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 23
  },
      y = _ref.x;

  assert.sameValue(y, 23);
  assert["throws"](ReferenceError, function () {
    x;
  });
  callCount = callCount + 1;
};

f();
assert.sameValue(callCount, 1, 'function invoked exactly once');