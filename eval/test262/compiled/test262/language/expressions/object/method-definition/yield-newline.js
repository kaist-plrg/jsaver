// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      Newlines terminate `yield` expressions.
  features: [generators]
  es6id: 14.4
---*/
var iter, result;
var obj = {
  g: /*#__PURE__*/regeneratorRuntime.mark(function g() {
    return regeneratorRuntime.wrap(function g$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return;

          case 2:
            1;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, g);
  })
};
iter = obj.g();
result = iter.next();
assert.sameValue(result.value, undefined, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, true, 'Second result `done` flag');