// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-generatorfunction-constructor
description: Object extensibility
info: |
  The value of the [[Extensible]] internal slot of the GeneratorFunction
  constructor is true.
features: [generators]
---*/
var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})).constructor;
assert(Object.isExtensible(GeneratorFunction));