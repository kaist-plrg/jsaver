function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property names can be used as the name of a generator method in an object
includes: [compareArray.js]
---*/
var object = _defineProperty({}, 'a', /*#__PURE__*/regeneratorRuntime.mark(function a() {
  return regeneratorRuntime.wrap(function a$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, a);
}));

assert(compareArray(Object.keys(object), ['a']), "`compareArray(Object.keys(object), ['a'])` returns `true`");