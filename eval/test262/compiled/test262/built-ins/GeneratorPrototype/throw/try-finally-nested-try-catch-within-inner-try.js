var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    When a generator is paused within a `try` block that is declared within a
    `try` block of a `try..catch` statement, `throw` should interrupt control
    flow as if a `throw` statement had appeared at that location in the
    function body.
features: [generators]
---*/
var unreachable = 0;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return 1;

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return 2;

        case 6:
          unreachable += 1;
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          _context.next = 13;
          return _context.t0;

        case 13:
          _context.next = 15;
          return 3;

        case 15:
          _context.prev = 15;
          _context.next = 18;
          return 4;

        case 18:
          return _context.finish(15);

        case 19:
          _context.next = 21;
          return 5;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0,, 15, 19], [3, 9]]);
}

var iter = g();
var exception = new Error();
var result;
result = iter.next();
assert.sameValue(result.value, 1, 'First result value');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, 2, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter["throw"](exception);
assert.sameValue(result.value, exception, 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
result = iter.next();
assert.sameValue(result.value, 3, 'Fourth result `value');
assert.sameValue(result.done, false, 'Fourth result `done` flag');
result = iter.next();
assert.sameValue(result.value, 4, 'Fifth result `value`');
assert.sameValue(result.done, false, 'Fifth result `done` flag');
result = iter.next();
assert.sameValue(result.value, 5, 'Sixth result `value`');
assert.sameValue(result.done, false, 'Sixth result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
iter.next();