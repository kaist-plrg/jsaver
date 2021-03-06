// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-fn.case
// - src/dstr-binding/default/for-of-var.template

/*---
description: SingleNameBinding assigns name to "anonymous" functions (for-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
        for ( var ForBinding of AssignmentExpression ) Statement

    [...]
    3. Return ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult,
       varBinding, labelSet).

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
              1. Assert: lhs is a ForBinding.
              2. Let status be the result of performing BindingInitialization
                 for lhs passing nextValue and undefined as the arguments.
          [...]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
---*/
var iterCount = 0;

for (var _i = 0, _arr = [{}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i],
      _arr$_i$fn = _arr$_i.fn,
      fn = _arr$_i$fn === void 0 ? function () {} : _arr$_i$fn,
      _arr$_i$xFn = _arr$_i.xFn,
      xFn = _arr$_i$xFn === void 0 ? function x() {} : _arr$_i$xFn;
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');