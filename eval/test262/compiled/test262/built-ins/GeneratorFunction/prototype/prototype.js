// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2.3.2
description: >
    The value of GeneratorFunction.prototype.prototype is the
    %GeneratorPrototype% intrinsic object.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [generators]
---*/
var GeneratorFunctionPrototype = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
assert.sameValue(GeneratorFunctionPrototype.prototype, Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}).prototype));
verifyNotEnumerable(GeneratorFunctionPrototype, 'prototype');
verifyNotWritable(GeneratorFunctionPrototype, 'prototype');
verifyConfigurable(GeneratorFunctionPrototype, 'prototype');