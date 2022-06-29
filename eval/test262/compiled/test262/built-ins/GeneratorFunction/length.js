// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generatorfunction.length
description: >
  This is a data property with a value of 1. This property has the attributes {
  [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
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
assert.sameValue(GeneratorFunction.length, 1);
verifyNotEnumerable(GeneratorFunction, 'length');
verifyNotWritable(GeneratorFunction, 'length');
verifyConfigurable(GeneratorFunction, 'length');