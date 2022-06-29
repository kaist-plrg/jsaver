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
features: [generators]
---*/
var obj = Object.create(null);
var iter, iterResult, value;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'hit' in obj;

        case 2:
          value = _context.sent;
          _context.next = 5;
          return 'miss' in obj;

        case 5:
          value = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

obj.hit = true;
iter = g();
iterResult = iter.next('first');
assert.sameValue(iterResult.done, false, '`done` property (first iteration)');
assert.sameValue(iterResult.value, true, '`value` property (first iteration)');
assert.sameValue(value, undefined, 'generator paused prior to evaluating AssignmentExpression');
iterResult = iter.next('second');
assert.sameValue(iterResult.done, false, '`done` property (second iteration)');
assert.sameValue(iterResult.value, false, '`value` property (second iteration)');
assert.sameValue(value, 'second', 'value of first AssignmentExpression');
iterResult = iter.next('third');
assert.sameValue(iterResult.done, true, '`done` property (third iteration)');
assert.sameValue(iterResult.value, undefined, '`value` property (third iteration)');
assert.sameValue(value, 'third', 'value of second AssignmentExpression');