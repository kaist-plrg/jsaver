// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-target-yield-expr.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of an AssignmentElement and within a generator function body, it should behave as a YieldExpression. (AssignmentExpression)
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
var x = {};
var iterationResult, iter;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _vals;

  var result, vals;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          vals = {
            x: 23
          };
          _vals = vals;
          _context.next = 4;
          return;

        case 4:
          _context.t0 = _context.sent;
          x[_context.t0] = _vals.x;
          result = _vals;
          assert.sameValue(result, vals);

        case 8:
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