// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-trailing-comma.case
// - src/dstr-binding/default/arrow-function-dflt.template

/*---
description: Trailing comma is allowed following BindingPropertyList (arrow function expression (default parameter))
esid: sec-arrow-function-definitions-runtime-semantics-evaluation
features: [destructuring-binding, default-parameters]
flags: [generated]
info: |
    ArrowFunction : ArrowParameters => ConciseBody

    [...]
    4. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, strict).
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
var f;

f = function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 23
  },
      x = _ref.x;

  assert.sameValue(x, 23);
  callCount = callCount + 1;
};

f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');