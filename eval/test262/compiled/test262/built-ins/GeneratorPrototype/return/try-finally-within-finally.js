var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.3
description: >
    When a generator is paused within the `finally` block of a `try..finally`
    statement, `return` should interrupt control flow as if a `return`
    statement had appeared at that location in the function body.
features: [generators]
---*/
var inFinally = 0;
var unreachable = 0;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

        case 1:
          _context.prev = 1;
          inFinally += 1;
          _context.next = 5;
          return;

        case 5:
          unreachable += 1;
          return _context.finish(1);

        case 7:
          unreachable += 1;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0,, 1, 7]]);
}

var iter = g();
var result;
iter.next();
assert.sameValue(inFinally, 1, '`finally` code path executed');
result = iter["return"](45);
assert.sameValue(result.value, 45, 'Result `value` following `return`');
assert.sameValue(result.done, true, 'Result `done` flag following `return`');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `return`)');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when complete');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when complete');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');