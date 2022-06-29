// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generatorfunction.prototype.constructor
description: >
  `constructor` property of the GeneratorFunction.prototype object
info: |
  The initial value of GeneratorFunction.prototype.constructor is the intrinsic
  object %GeneratorFunction%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
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
assert.sameValue(GeneratorFunction.prototype.constructor, GeneratorFunction);
verifyNotEnumerable(GeneratorFunction.prototype, 'constructor');
verifyNotWritable(GeneratorFunction.prototype, 'constructor');
verifyConfigurable(GeneratorFunction.prototype, 'constructor');