var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: Invocation of iterator `throw` method
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
            [...]
features: [generators, Symbol.iterator]
---*/
var args, thisValue;
var callCount = 0;
var spyIterator = {
  next: function next() {
    return {
      done: false
    };
  },
  "throw": function _throw() {
    callCount += 1;
    args = arguments;
    thisValue = this;
    return {
      done: true
    };
  }
};
var spyIterable = {};

spyIterable[Symbol.iterator] = function () {
  return spyIterator;
};

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(spyIterable, "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iter = g();
iter.next(8888);
iter["throw"](7777);
assert.sameValue(callCount, 1);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], 7777);
assert.sameValue(thisValue, spyIterator);