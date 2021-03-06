// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-order.case
// - src/dstr-assignment/default/for-of.template

/*---
description: Initializer values should be assigned in left-to-right order. (For..of statement)
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
var x = 0;
var a, b;
var counter = 0;

for (var _i = 0, _arr = [{}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i];
  var _arr$_i$a = _arr$_i.a;
  a = _arr$_i$a === void 0 ? x += 1 : _arr$_i$a;
  var _arr$_i$b = _arr$_i.b;
  b = _arr$_i$b === void 0 ? x *= 2 : _arr$_i$b;
  assert.sameValue(a, 1);
  assert.sameValue(b, 2);
  assert.sameValue(x, 2);
  counter += 1;
}

assert.sameValue(counter, 1);