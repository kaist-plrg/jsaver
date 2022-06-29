function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: >
  Abrupt completion returned after protocol violation (and a `return` method
  is not defined)
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
            [...]
        iii. Else,
             1. NOTE: If iterator does not have a throw method, this throw is
                going to terminate the yield* loop. But first we need to give
                iterator a chance to clean up.
             2. Perform ? IteratorClose(iterator, Completion{[[Type]]: normal,
                [[Value]]: empty, [[Target]]: empty}).
             3. NOTE: The next step throws a TypeError to indicate that there
                was a yield* protocol violation: iterator does not have a throw
                method.
             4. Throw a TypeError exception.

  7.4.6 IteratorClose

  1. Assert: Type(iterator) is Object.
  2. Assert: completion is a Completion Record.
  3. Let return be ? GetMethod(iterator, "return").
  4. If return is undefined, return Completion(completion).
features: [generators, Symbol.iterator]
---*/
var badIter = {};
var throwCount = 0;
var returnCount = 0;
var spyResult = {
  next: function next() {
    return {
      done: false
    };
  }
};
Object.defineProperty(spyResult, 'throw', {
  get: function get() {
    throwCount += 1;
  }
});
Object.defineProperty(spyResult, 'return', {
  get: function get() {
    returnCount += 1;
  }
});

badIter[Symbol.iterator] = function () {
  return spyResult;
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
assert.sameValue(throwCount, 1, '`throw` property access');
assert.sameValue(returnCount, 1, '`return` property access');
assert.sameValue(_typeof(caught), 'object');
assert.sameValue(caught.constructor, TypeError);