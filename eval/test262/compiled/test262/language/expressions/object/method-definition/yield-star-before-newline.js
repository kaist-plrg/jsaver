// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The right-hand side of a `yield *` expression may appear on a new line.
  features: [generators]
  es6id: 14.4
---*/
var result;
var obj = {
  g: /*#__PURE__*/regeneratorRuntime.mark(function g() {
    return regeneratorRuntime.wrap(function g$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.delegateYield(g2(), "t0", 1);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, g);
  })
};
var g2 = /*#__PURE__*/regeneratorRuntime.mark(function g2() {
  return regeneratorRuntime.wrap(function g2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, g2);
});
result = obj.g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);