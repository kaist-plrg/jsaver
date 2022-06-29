// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Generator can be declared with GeneratorExpression syntax
es6id: 14.4
author: Sam Mikes
description: can create generator function expressions (no name)
features: [generators]
---*/
var f = /*#__PURE__*/regeneratorRuntime.mark(function f(a) {
  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return a + 1;

        case 2:
          return _context.abrupt("return");

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, f);
});
assert.sameValue(f.name, 'f');
var g = f(3);
assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);