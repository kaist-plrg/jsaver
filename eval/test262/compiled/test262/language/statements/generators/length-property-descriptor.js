var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions should define a `length` property.
includes: [propertyHelper.js]
es6id: 25.2.4
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

assert.sameValue(g.length, 0);
verifyNotEnumerable(g, 'length');
verifyNotWritable(g, 'length');
verifyConfigurable(g, 'length');