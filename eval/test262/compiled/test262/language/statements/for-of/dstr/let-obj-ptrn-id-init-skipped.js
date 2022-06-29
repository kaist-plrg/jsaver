// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-skipped.case
// - src/dstr-binding/default/for-of-let.template

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

for (var _i = 0, _arr = [{
  w: null,
  x: 0,
  y: false,
  z: ''
}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i],
      _arr$_i$w = _arr$_i.w,
      w = _arr$_i$w === void 0 ? counter() : _arr$_i$w,
      _arr$_i$x = _arr$_i.x,
      x = _arr$_i$x === void 0 ? counter() : _arr$_i$x,
      _arr$_i$y = _arr$_i.y,
      y = _arr$_i$y === void 0 ? counter() : _arr$_i$y,
      _arr$_i$z = _arr$_i.z,
      z = _arr$_i$z === void 0 ? counter() : _arr$_i$z;
  assert.sameValue(w, null);
  assert.sameValue(x, 0);
  assert.sameValue(y, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');