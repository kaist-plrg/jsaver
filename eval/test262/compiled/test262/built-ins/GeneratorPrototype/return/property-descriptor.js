var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The GeneratorPrototype intrinsic should define a `return` property that is
    non-enumerable, writable, and configurable (as per section 17).
includes: [propertyHelper.js]
es6id: 25.3.1
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

var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
verifyNotEnumerable(GeneratorPrototype, 'return');
verifyWritable(GeneratorPrototype, 'return');
verifyConfigurable(GeneratorPrototype, 'return');