// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` expressions may be used as the right-hand-side of other `yield`
    expressions.
es6id: 14.4
features: [generators]
---*/
var iter, result;
var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, g);
});
iter = g();
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Third result `value`');
assert.sameValue(result.done, true, 'Thid result `done` flag');