// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-yield-expr.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: When a `yield` token appears within the Initializer of an AssignmentProperty and within a generator function body, it should behave as a YieldExpression. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [generators, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var iterationResult, x, iter;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _vals, _vals$x;

  var result, vals;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          vals = {};
          _vals = vals;
          _vals$x = _vals.x;

          if (!(_vals$x === void 0)) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return;

        case 6:
          _context.t0 = _context.sent;
          _context.next = 10;
          break;

        case 9:
          _context.t0 = _vals$x;

        case 10:
          x = _context.t0;
          result = _vals;
          assert.sameValue(result, vals);

        case 13:
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