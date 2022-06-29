// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-target-yield-expr.case
// - src/dstr-assignment/default/for-of.template

/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of an AssignmentElement and within a generator function body, it should behave as a YieldExpression. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [generators, destructuring-binding]
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
var x = {};
var iterationResult, iter;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var counter, _i, _arr;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = 0;
          _i = 0, _arr = [{
            x: 23
          }];

        case 2:
          if (!(_i < _arr.length)) {
            _context.next = 11;
            break;
          }

          _context.next = 5;
          return;

        case 5:
          _context.t0 = _context.sent;
          x[_context.t0] = _arr[_i].x;
          counter += 1;

        case 8:
          _i++;
          _context.next = 2;
          break;

        case 11:
          assert.sameValue(counter, 1);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})();
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x.prop, undefined);
iterationResult = iter.next('prop');
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x.prop, 23);