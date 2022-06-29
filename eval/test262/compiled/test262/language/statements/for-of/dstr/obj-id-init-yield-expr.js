// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-yield-expr.case
// - src/dstr-assignment/default/for-of.template

/*---
description: When a `yield` token appears within the Initializer of an AssignmentProperty and within a generator function body, it should behave as a YieldExpression. (For..of statement)
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
var iterationResult, x, iter;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var counter, _i, _arr, _arr$_i$x;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = 0;
          _i = 0, _arr = [{}];

        case 2:
          if (!(_i < _arr.length)) {
            _context.next = 16;
            break;
          }

          _arr$_i$x = _arr[_i].x;

          if (!(_arr$_i$x === void 0)) {
            _context.next = 10;
            break;
          }

          _context.next = 7;
          return;

        case 7:
          _context.t0 = _context.sent;
          _context.next = 11;
          break;

        case 10:
          _context.t0 = _arr$_i$x;

        case 11:
          x = _context.t0;
          counter += 1;

        case 13:
          _i++;
          _context.next = 2;
          break;

        case 16:
          assert.sameValue(counter, 1);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})();
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x, undefined);
iterationResult = iter.next(3);
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x, 3);