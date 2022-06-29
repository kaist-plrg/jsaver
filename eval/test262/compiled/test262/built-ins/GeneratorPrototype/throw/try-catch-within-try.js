var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    When a generator is paused within the `try` block of a `try..catch`
    statement, `throw` should interrupt control flow as if a `throw` statement
    had appeared at that location in the function body.
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
          _context.prev = 2;
          _context.next = 5;
          return 2;

        case 5:
          unreachable += 1;
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
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
  }, _marked, null, [[2, 8]]);
}

var iter, result, exception;
exception = new Test262Error();
iter = g();
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, 2, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter["throw"](exception);
assert.sameValue(result.value, exception, 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
result = iter.next();
assert.sameValue(result.value, 3, 'Fourth result `done` flag');
assert.sameValue(result.done, false, 'Fourth result `value`');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `catch`)');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
iter.next();