// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions declared as methods define a `prototype` property.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/
var GeneratorPrototype = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})).prototype;
var method = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method() {
    return regeneratorRuntime.wrap(function method$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, method);
  })
}.method;
verifyNotEnumerable(method, 'prototype');
verifyWritable(method, 'prototype');
verifyNotConfigurable(method, 'prototype');
assert.sameValue(Object.getPrototypeOf(method.prototype), GeneratorPrototype);