// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-obj-id.case
// - src/dstr-binding/default/for-var.template

/*---
description: BindingElement with object binding pattern and initializer is not used (for statement)
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

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    [...]
    2. If iteratorRecord.[[done]] is true, let v be undefined.
    3. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be ? GetValue(defaultValue).
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.
---*/
var iterCount = 0;

for (_ref = [{
  x: 11,
  y: 22,
  z: 33
}], _ref$ = _ref[0], _ref$ = _ref$ === void 0 ? {
  x: 44,
  y: 55,
  z: 66
} : _ref$, x = _ref$.x, y = _ref$.y, z = _ref$.z, void 0; iterCount < 1;) {
  var _ref, _ref$, x, y, z;

  assert.sameValue(x, 11);
  assert.sameValue(y, 22);
  assert.sameValue(z, 33);
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');