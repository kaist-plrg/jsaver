// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `return` is a valid statement within generator function bodies.
es6id: 14.4
features: [generators]
---*/
var result;
var g1 = /*#__PURE__*/regeneratorRuntime.mark(function g1() {
  return regeneratorRuntime.wrap(function g1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, g1);
});
var g2 = /*#__PURE__*/regeneratorRuntime.mark(function g2() {
  return regeneratorRuntime.wrap(function g2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", 1);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, g2);
});
result = g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
result = g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);