// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-put-order.case
// - src/dstr-assignment/default/for-of.template

/*---
description: The AssignmentElements in an AssignmentElementList are evaluated in left- to-right order. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var x;
var counter = 0;

for (var _i = 0, _arr = [{
  a: 2,
  z: 1
}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i];
  x = _arr$_i.z;
  x = _arr$_i.a;
  assert.sameValue(x, 2);
  counter += 1;
}

assert.sameValue(counter, 1);