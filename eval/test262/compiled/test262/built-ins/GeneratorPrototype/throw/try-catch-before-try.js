var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    When a generator is paused before a `try..catch` statement, `throw` should
    interrupt control flow as if a `throw` statement had appeared at that
    location in the function body.
features: [generators]
---*/
var unreachable = 0;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          unreachable += 1;
          _context.prev = 3;
          _context.next = 6;
          return 2;

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
          _context.next = 12;
          return _context.t0;

        case 12:
          _context.next = 14;
          return 3;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 8]]);
}

var iter, result;
iter = g();
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (paused at yield)');
assert["throws"](Test262Error, function () {
  iter["throw"](new Test262Error());
});
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
iter.next();