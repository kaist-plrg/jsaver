// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-put-unresolvable-strict.case
// - src/dstr-assignment/error/for-of.template

/*---
description: In strict mode, if the the assignment target is an unresolvable reference, a ReferenceError should be thrown. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated, onlyStrict]
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
var counter = 0;
assert["throws"](ReferenceError, function () {
  for (var _i = 0, _arr = [{}]; _i < _arr.length; _i++) {
    unresolvable = _arr[_i].unresolvable;
    counter += 1;
  }

  counter += 1;
});
assert.sameValue(counter, 0);