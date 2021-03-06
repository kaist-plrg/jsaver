// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj.case
// - src/dstr-binding/default/func-decl-dflt.template

/*---
description: Object binding pattern with "nested" object binding pattern not using initializer (function declaration (default parameter))
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

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
var callCount = 0;

function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    w: {
      x: undefined,
      z: 7
    }
  },
      _ref$w = _ref.w;

  _ref$w = _ref$w === void 0 ? {
    x: 4,
    y: 5,
    z: 6
  } : _ref$w;
  var x = _ref$w.x,
      y = _ref$w.y,
      z = _ref$w.z;
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert["throws"](ReferenceError, function () {
    w;
  });
  callCount = callCount + 1;
}

;
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');