var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: Value received from invocation of generator's `return` method
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
        [...]
     c. Else,
        i. Assert: received.[[Type]] is return.
        ii. Let return be ? GetMethod(iterator, "return").
        iii. If return is undefined, return Completion(received).
        iv. Let innerReturnResult be ? Call(return, iterator, «
            received.[[Value]] »).
        v. If Type(innerReturnResult) is not Object, throw a TypeError
           exception.
        vi. Let done be ? IteratorComplete(innerReturnResult).
        vii. If done is true, then
             1. Let value be ? IteratorValue(innerReturnResult).
             2. Return Completion{[[Type]]: return, [[Value]]: value,
                [[Target]]: empty}.
        viii. Let received be GeneratorYield(innerReturnResult).

features: [generators, Symbol.iterator]
---*/
var quickIter = {};
var normalCompletion = false;
var errorCompletion = false;
var delegationComplete = false;
var iter, returnReceived;

quickIter[Symbol.iterator] = function () {
  return {
    next: function next() {
      return {
        done: false
      };
    },
    "return": function _return(x) {
      returnReceived = x;
      return {
        done: true,
        value: 3333
      };
    }
  };
};

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          return _context.delegateYield(quickIter, "t0", 2);

        case 2:
          normalCompletion = true;
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t1 = _context["catch"](0);
          errorCompletion = true;

        case 8:
          _context.prev = 8;
          delegationComplete = true;
          return _context.finish(8);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5, 8, 11]]);
}

iter = g();
iter.next();
iter["return"](2222);
assert.sameValue(returnReceived, 2222);
assert.sameValue(delegationComplete, true, 'delegation complete');
assert.sameValue(normalCompletion, false, 'completion was abrupt');
assert.sameValue(errorCompletion, false, 'completion was not of type "throw"');