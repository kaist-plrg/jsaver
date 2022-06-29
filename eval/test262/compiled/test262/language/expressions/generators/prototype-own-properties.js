// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2.4.2
description: >
    The `prototype` property of GeneratorFunction instances are created as
    plain objects with no "own" properties.
features: [generators]
---*/
var ownProperties = Object.getOwnPropertyNames( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}).prototype);
assert.sameValue(ownProperties.length, 0);