// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/for-of-const.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (for-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
        for ( ForDeclaration of AssignmentExpression ) Statement

    [...]
    3. Return ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult,
       lexicalBinding, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    3. Let destructuring be IsDestructuring of lhs.
    [...]
    5. Repeat
       [...]
       h. If destructuring is false, then
          [...]
       i. Else
          i. If lhsKind is assignment, then
             [...]
          ii. Else if lhsKind is varBinding, then
              [...]
          iii. Else,
               1. Assert: lhsKind is lexicalBinding.
               2. Assert: lhs is a ForDeclaration.
               3. Let status be the result of performing BindingInitialization
                  for lhs passing nextValue and iterationEnv as arguments.
          [...]

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

for (var _i = 0, _arr = [{
  s: null,
  u: 0,
  w: false,
  y: ''
}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i],
      _arr$_i$s = _arr$_i.s,
      t = _arr$_i$s === void 0 ? counter() : _arr$_i$s,
      _arr$_i$u = _arr$_i.u,
      v = _arr$_i$u === void 0 ? counter() : _arr$_i$u,
      _arr$_i$w = _arr$_i.w,
      x = _arr$_i$w === void 0 ? counter() : _arr$_i$w,
      _arr$_i$y = _arr$_i.y,
      z = _arr$_i$y === void 0 ? counter() : _arr$_i$y;
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

assert.sameValue(iterCount, 1, 'iteration occurred as expected');