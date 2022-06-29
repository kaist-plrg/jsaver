// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    GeneratorFunction instances are created with a unique prototype object.
es6id: 25.2.1
features: [generators]
---*/
var g1 = /*#__PURE__*/regeneratorRuntime.mark(function g1() {
  return regeneratorRuntime.wrap(function g1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
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
        case "end":
          return _context2.stop();
      }
    }
  }, g2);
});
assert(g1.prototype !== g2.prototype);