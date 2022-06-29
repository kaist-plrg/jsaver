var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(g2);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    GeneratorFunction instances are created with a unique prototype object.
es6id: 25.2.1
features: [generators]
---*/
function g1() {
  return regeneratorRuntime.wrap(function g1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function g2() {
  return regeneratorRuntime.wrap(function g2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

assert(g1.prototype !== g2.prototype);