var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2
description: >
    The `next` method returns an object that has "own" properties `value` and
    `done` and that inherits directly from the Object prototype.
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

var result = g().next();
assert(Object.hasOwnProperty.call(result, 'value'), 'Has "own" property `value`');
assert(Object.hasOwnProperty.call(result, 'done'), 'Has "own" property `done`');
assert.sameValue(Object.getPrototypeOf(result), Object.prototype);