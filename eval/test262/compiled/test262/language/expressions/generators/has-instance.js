// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    A Generator object is an instance of a generator function.
es6id: 25.3
features: [generators]
---*/
var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, g);
});
assert(g() instanceof g, 'Instance created via function invocation');