var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: >
  Abrupt completion returned when accessing `value` property of iteration
  result
info: |
  YieldExpression : yield * AssignmentExpression

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
  3. Let iterator be ? GetIterator(value).
  4. Let received be NormalCompletion(undefined).
  5. Repeat
     a. If received.[[Type]] is normal, then
        [...]
     b. Else if received.[[Type]] is throw, then
        i. Let throw be ? GetMethod(iterator, "throw").
        ii. If throw is not undefined, then
            1. Let innerResult be ? Call(throw, iterator, « received.[[Value]]
               »).
            2. NOTE: Exceptions from the inner iterator throw method are
               propagated. Normal completions from an inner throw method are
               processed similarly to an inner next.
            3. If Type(innerResult) is not Object, throw a TypeError exception.
            4. Let done be ? IteratorComplete(innerResult).
            5. If done is true, then
               a. Return ? IteratorValue(innerResult).

  7.4.4 IteratorValue

  1. Assert: Type(iterResult) is Object.
  2. Return ? Get(iterResult, "value").
features: [generators, Symbol.iterator]
---*/
var thrown = new Test262Error();
var badIter = {};
var poisonedValue = Object.defineProperty({
  done: true
}, 'value', {
  get: function get() {
    throw thrown;
  }
});

badIter[Symbol.iterator] = function () {
  return {
    next: function next() {
      return {
        done: false
      };
    },
    "throw": function _throw() {
      return poisonedValue;
    }
  };
};

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          return _context.delegateYield(badIter, "t0", 2);

        case 2:
          _context.next = 7;
          break;

        case 4:
          _context.prev = 4;
          _context.t1 = _context["catch"](0);
          caught = _context.t1;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 4]]);
}

var iter = g();
var caught;
iter.next();
iter["throw"]();
assert.sameValue(caught, thrown);