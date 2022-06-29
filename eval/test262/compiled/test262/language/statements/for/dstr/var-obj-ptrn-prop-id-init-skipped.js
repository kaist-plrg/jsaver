// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/for-var.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (for statement)
esid: sec-for-statement-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
        for ( var VariableDeclarationList ; Expressionopt ; Expressionopt ) Statement

    1. Let varDcl be the result of evaluating VariableDeclarationList.
    [...]

    13.3.2.4 Runtime Semantics: Evaluation

    VariableDeclarationList : VariableDeclarationList , VariableDeclaration

    1. Let next be the result of evaluating VariableDeclarationList.
    2. ReturnIfAbrupt(next).
    3. Return the result of evaluating VariableDeclaration.

    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for BindingPattern
       passing rval and undefined as arguments.

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    BindingElement : BindingPattern Initializeropt

    [...]
    3. If Initializer is present and v is undefined, then
    [...]
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var iterCount = 0;

for (var _s$u$w$y = {
  s: null,
  u: 0,
  w: false,
  y: ''
}, _s$u$w$y$s = _s$u$w$y.s, t = _s$u$w$y$s === void 0 ? counter() : _s$u$w$y$s, _s$u$w$y$u = _s$u$w$y.u, v = _s$u$w$y$u === void 0 ? counter() : _s$u$w$y$u, _s$u$w$y$w = _s$u$w$y.w, x = _s$u$w$y$w === void 0 ? counter() : _s$u$w$y$w, _s$u$w$y$y = _s$u$w$y.y, z = _s$u$w$y$y === void 0 ? counter() : _s$u$w$y$y; iterCount < 1;) {
  assert.sameValue(t, null);
  assert.sameValue(v, 0);
  assert.sameValue(x, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  assert["throws"](ReferenceError, function () {
    s;
  });
  assert["throws"](ReferenceError, function () {
    u;
  });
  assert["throws"](ReferenceError, function () {
    w;
  });
  assert["throws"](ReferenceError, function () {
    y;
  });
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');