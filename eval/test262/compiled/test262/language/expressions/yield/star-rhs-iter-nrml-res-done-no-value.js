var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: >
  `value` property is not accessed when iteration is incomplete
info: |
  YieldExpression : yield * AssignmentExpression

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
  3. Let iterator be ? GetIterator(value).
  4. Let received be NormalCompletion(undefined).
  5. Repeat
     a. If received.[[Type]] is normal, then
        i. Let innerResult be ? IteratorNext(iterator, received.[[Value]]).
        ii. Let done be ? IteratorComplete(innerResult).
        iii. If done is true, then
             1. Return ? IteratorValue(innerResult).
features: [generators, Symbol.iterator]
---*/
var badIter = {};
var callCount = 0;
var spyValue = Object.defineProperty({
  done: false
}, 'value', {
  get: function get() {
    callCount += 1;
  }
});

badIter[Symbol.iterator] = function () {
  return {
    next: function next() {
      return spyValue;
    }
  };
};

var delegationComplete = false;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(badIter, "t0", 1);

        case 1:
          delegationComplete = true;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iter = g();
iter.next();
assert.sameValue(callCount, 0, 'access count (first iteration)');
assert.sameValue(delegationComplete, false, 'delegation ongoing (first iteration)');
iter.next();
assert.sameValue(callCount, 0, 'access count (second iteration)');
assert.sameValue(delegationComplete, false, 'delegation ongoing (second iteration)');
spyValue.done = true;
iter.next();
assert.sameValue(callCount, 1, 'access count (final iteration)');
assert.sameValue(delegationComplete, true, 'delegation complete');