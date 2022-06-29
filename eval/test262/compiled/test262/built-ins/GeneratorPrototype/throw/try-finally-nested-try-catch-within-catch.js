var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    When a generator is paused within a `catch` block that is declared within a
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
          throw exception;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          _context.next = 13;
          return _context.t0;

        case 13:
          unreachable += 1;

        case 14:
          _context.next = 16;
          return 3;

        case 16:
          _context.prev = 16;
          _context.next = 19;
          return 4;

        case 19:
          return _context.finish(16);

        case 20:
          _context.next = 22;
          return 5;

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0,, 16, 20], [3, 9]]);
}

var exception = new Error();
var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, 2, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter.next();
assert.sameValue(result.value, exception, 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');
result = iter["throw"](new Test262Error());
assert.sameValue(result.value, 4, 'Fourth result `value`');
assert.sameValue(result.done, false, 'Fourth result `done` flag');
assert["throws"](Test262Error, function () {
  iter.next();
});
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
iter.next();