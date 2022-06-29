// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj.case
// - src/dstr-binding/default/var-stmt.template

/*---
description: Object binding pattern with "nested" object binding pattern not using initializer (`var` statement)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
var _w = {
  w: {
    x: undefined,
    z: 7
  }
},
    _w$w = _w.w;
_w$w = _w$w === void 0 ? {
  x: 4,
  y: 5,
  z: 6
} : _w$w;
var x = _w$w.x,
    y = _w$w.y,
    z = _w$w.z;
assert.sameValue(x, undefined);
assert.sameValue(y, undefined);
assert.sameValue(z, 7);
assert["throws"](ReferenceError, function () {
  w;
});