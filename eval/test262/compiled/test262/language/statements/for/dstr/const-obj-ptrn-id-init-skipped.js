// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-skipped.case
// - src/dstr-binding/default/for-const.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (for statement)
esid: sec-for-statement-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
        for ( LexicalDeclaration Expressionopt ; Expressionopt ) Statement

    [...]
    7. Let forDcl be the result of evaluating LexicalDeclaration.
    [...]

    LexicalDeclaration : LetOrConst BindingList ;

    1. Let next be the result of evaluating BindingList.
    2. ReturnIfAbrupt(next).
    3. Return NormalCompletion(empty).

    BindingList : BindingList , LexicalBinding

    1. Let next be the result of evaluating BindingList.
    2. ReturnIfAbrupt(next).
    3. Return the result of evaluating LexicalBinding.

    LexicalBinding : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let value be GetValue(rhs).
    3. ReturnIfAbrupt(value).
    4. Let env be the running execution context’s LexicalEnvironment.
    5. Return the result of performing BindingInitialization for BindingPattern
       using value and env as the arguments.

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

var iterCount = 0;

for (var _w$x$y$z = {
  w: null,
  x: 0,
  y: false,
  z: ''
}, _w$x$y$z$w = _w$x$y$z.w, w = _w$x$y$z$w === void 0 ? counter() : _w$x$y$z$w, _w$x$y$z$x = _w$x$y$z.x, x = _w$x$y$z$x === void 0 ? counter() : _w$x$y$z$x, _w$x$y$z$y = _w$x$y$z.y, y = _w$x$y$z$y === void 0 ? counter() : _w$x$y$z$y, _w$x$y$z$z = _w$x$y$z.z, z = _w$x$y$z$z === void 0 ? counter() : _w$x$y$z$z; iterCount < 1;) {
  assert.sameValue(w, null);
  assert.sameValue(x, 0);
  assert.sameValue(y, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');