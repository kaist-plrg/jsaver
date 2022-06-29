// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Generator can be declared with GeneratorMethod syntax
features: [generators]
es6id: 14.4
author: Sam Mikes
description: can declare generator methods
---*/
var obj = {
  foo: /*#__PURE__*/regeneratorRuntime.mark(function foo(a) {
    return regeneratorRuntime.wrap(function foo$(_context) {
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
    }, foo);
  })
};
var g = obj.foo(3);
assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);