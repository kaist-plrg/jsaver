var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: Invocation of iterator `next` method
info: |
  YieldExpression : yield * AssignmentExpression

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
  3. Let iterator be ? GetIterator(value).
  4. Let received be NormalCompletion(undefined).
  5. Repeat
     a. If received.[[Type]] is normal, then
        i. Let innerResult be ? IteratorNext(iterator, received.[[Value]]).

  7.4.2 IteratorNext

  1. If value was not passed, then
     [...]
  2. Else,
     a. Let result be ? Invoke(iterator, "next", « value »).
     [...]
features: [generators, Symbol.iterator]
---*/
var args, thisValue;
var callCount = 0;
var spyIterator = {
  next: function next() {
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
iter.next(9876);
assert.sameValue(callCount, 1);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], undefined);
assert.sameValue(thisValue, spyIterator);