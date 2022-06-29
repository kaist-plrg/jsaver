// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Generator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
es6id: 25.3.1.5
includes: [propertyHelper.js]
features: [generators, Symbol.toStringTag]
---*/
var GeneratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})()));
assert.sameValue(GeneratorPrototype[Symbol.toStringTag], 'Generator');
verifyNotEnumerable(GeneratorPrototype, Symbol.toStringTag);
verifyNotWritable(GeneratorPrototype, Symbol.toStringTag);
verifyConfigurable(GeneratorPrototype, Symbol.toStringTag);