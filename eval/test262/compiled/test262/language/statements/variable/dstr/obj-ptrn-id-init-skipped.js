// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-skipped.case
// - src/dstr-binding/default/var-stmt.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (`var` statement)
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

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
    [...]
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var _w$x$y$z = {
  w: null,
  x: 0,
  y: false,
  z: ''
},
    _w$x$y$z$w = _w$x$y$z.w,
    w = _w$x$y$z$w === void 0 ? counter() : _w$x$y$z$w,
    _w$x$y$z$x = _w$x$y$z.x,
    x = _w$x$y$z$x === void 0 ? counter() : _w$x$y$z$x,
    _w$x$y$z$y = _w$x$y$z.y,
    y = _w$x$y$z$y === void 0 ? counter() : _w$x$y$z$y,
    _w$x$y$z$z = _w$x$y$z.z,
    z = _w$x$y$z$z === void 0 ? counter() : _w$x$y$z$z;
assert.sameValue(w, null);
assert.sameValue(x, 0);
assert.sameValue(y, false);
assert.sameValue(z, '');
assert.sameValue(initCount, 0);