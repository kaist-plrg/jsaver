// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The prototype of generator functions declared as methods is the
    Generator Prototype.
es6id: 14.4.13
features: [generators]
---*/
var obj = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method() {
    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
};
assert.sameValue(Object.getPrototypeOf(obj.method), Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee);
})));