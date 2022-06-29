var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2
description: >
    When the `next` method of a generator-produced iterable is invoked without
    an argument, the corresponding `yield` expression should be evaluated as
    `undefined`.
features: [generators]
---*/
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return;

        case 2:
          actual = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var expected = {};
var iter = g();
var actual, result;
result = iter.next();
assert.sameValue(result.value, undefined, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
assert.sameValue(actual, undefined, 'Value of `yield` expression (prior to continuation)');
result = iter.next(expected);
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, true, 'Second result `done` flag');
assert.sameValue(actual, expected, 'Value of `yield` expression (following continuation)');