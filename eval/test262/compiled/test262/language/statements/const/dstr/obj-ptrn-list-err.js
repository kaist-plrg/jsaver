// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-list-err.case
// - src/dstr-binding/error/const-stmt.template

/*---
description: Binding property list evaluation is interrupted by an abrupt completion (`const` statement)
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    LexicalBinding : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let value be GetValue(rhs).
    3. ReturnIfAbrupt(value).
    4. Let env be the running execution context's LexicalEnvironment.
    5. Return the result of performing BindingInitialization for BindingPattern
       using value and env as the arguments.

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
  var _ref = {},
      a = _ref.a,
      _ref$b = _ref.b,
      b = _ref$b === void 0 ? thrower() : _ref$b,
      _ref$c = _ref.c,
      c = _ref$c === void 0 ? ++initCount : _ref$c;
});
assert.sameValue(initCount, 0);