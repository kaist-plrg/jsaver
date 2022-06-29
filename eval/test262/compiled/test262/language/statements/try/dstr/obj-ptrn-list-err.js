// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-list-err.case
// - src/dstr-binding/error/try.template

/*---
description: Binding property list evaluation is interrupted by an abrupt completion (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingPropertyList : BindingPropertyList , BindingProperty

    1. Let status be the result of performing BindingInitialization for
       BindingPropertyList using value and environment as arguments.
    2. ReturnIfAbrupt(status).
---*/
var initCount = 0;

function thrower() {
  throw new Test262Error();
}

assert["throws"](Test262Error, function () {
  try {
    throw {};
  } catch (_ref) {
    var a = _ref.a;
    var _ref$b = _ref.b;
    var b = _ref$b === void 0 ? thrower() : _ref$b;
    var _ref$c = _ref.c;
    var c = _ref$c === void 0 ? ++initCount : _ref$c;
  }
});
assert.sameValue(initCount, 0);