var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions
es6id: 14.4
description: >
  YieldExpression contextually recognizes the `in` keyword as part of a
  RelationalExpression
info: |
  Syntax

  yield [no LineTerminator here] AssignmentExpression[?In, +Yield]
features: [generators, Symbol.iterator]
---*/
var obj = Object.create({
  hit: true
});
var iter, iterResult, value;
Boolean.prototype[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return this.valueOf();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
});

function g() {
  return regeneratorRuntime.wrap(function g$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield('hit' in obj, "t0", 1);

        case 1:
          value = _context2.t0;
          return _context2.delegateYield('miss' in obj, "t1", 3);

        case 3:
          value = _context2.t1;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

iter = g();
iterResult = iter.next('first');
assert.sameValue(iterResult.done, false, '`done` property (first iteration)');
assert.sameValue(iterResult.value, true, '`value` property (first iteration)');
assert.sameValue(value, undefined, 'generator paused prior to evaluating AssignmentExpression');
iterResult = iter.next('second');
assert.sameValue(iterResult.done, false, '`done` property (second iteration)');
assert.sameValue(iterResult.value, false, '`value` property (second iteration)');
assert.sameValue(value, undefined, 'value of first AssignmentExpression');
iterResult = iter.next('third');
assert.sameValue(iterResult.done, true, '`done` property (third iteration)');
assert.sameValue(iterResult.value, undefined, '`value` property (third iteration)');
assert.sameValue(value, undefined, 'value of second AssignmentExpression');