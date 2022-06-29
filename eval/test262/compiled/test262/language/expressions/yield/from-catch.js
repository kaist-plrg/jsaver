var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2
description: >
    The behavior of `yield` expressions should not be affected when they appear
    within the `catch` block of `try` statements.
features: [generators]
---*/
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          throw new Error();

        case 4:
          _context.prev = 4;
          _context.t0 = _context["catch"](0);
          _context.next = 8;
          return 1;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 4]]);
}

var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Final result `value`');
assert.sameValue(result.done, true, 'Final result `done`flag');