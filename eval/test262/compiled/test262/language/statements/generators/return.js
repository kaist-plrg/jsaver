var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(g2);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  return is a valid statement within generator function bodies.
es6id: 14.4
features: [generators]
---*/
function g1() {
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
  }, _marked);
}

function g2() {
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
  }, _marked2);
}

var result = g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
result = g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);