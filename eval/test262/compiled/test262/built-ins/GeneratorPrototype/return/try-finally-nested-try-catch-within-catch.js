var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.3
description: >
    When a generator is paused within a `catch` block that is declared within a
    `try` block of a `try..catch` statement, `return` should interrupt control
    flow as if a `return` statement had appeared at that location in the
    function body.
features: [generators]
---*/
var inCatch = 0;
var inFinally = 0;
var unreachable = 0;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.prev = 1;
          throw new Error();

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](1);
          inCatch += 1;
          _context.next = 10;
          return;

        case 10:
          unreachable += 1;

        case 11:
          unreachable += 1;

        case 12:
          _context.prev = 12;
          inFinally += 1;
          return _context.finish(12);

        case 15:
          unreachable += 1;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0,, 12, 15], [1, 5]]);
}

var iter = g();
var result;
result = iter.next();
assert.sameValue(inCatch, 1, '`catch` code patch executed');
assert.sameValue(inFinally, 0, '`finally` code path not executed');
result = iter["return"](45);
assert.sameValue(result.value, 45, 'Result `value` following `return`');
assert.sameValue(result.done, true, 'Result `done` flag following `return`');
assert.sameValue(inFinally, 1, '`finally` code path executed');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `return`)');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when complete');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when compelete');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');