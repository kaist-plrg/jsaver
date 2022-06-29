var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator statements cannot be used as constructors.
es6id: 14.4
features: [generators]
---*/
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

assert["throws"](TypeError, function () {
  var instance = new g();
});