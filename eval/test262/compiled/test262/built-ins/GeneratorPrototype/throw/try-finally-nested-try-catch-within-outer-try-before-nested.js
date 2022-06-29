var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    When a generator is paused within a `try` block of a `try..catch` statement
    and before a nested `try..catch` statement, `throw` should interrupt
    control flow as if a `throw` statement had appeared at that location in the
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
          unreachable += 1;
          _context.prev = 4;
          _context.next = 7;
          return 2;

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](4);
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
  }, _marked, null, [[0,, 15, 19], [4, 9]]);
}

var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter["throw"](new Test262Error());
assert.sameValue(result.value, 4, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
assert["throws"](Test262Error, function () {
  iter.next();
});
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
iter.next();