var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2
description: >
    When a generator body contains a lone return statement, it should produce
    an iterator that immediately completes with the returned value.
features: [generators]
---*/
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", 23);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, 23, 'Result value');
assert.sameValue(result.done, true, 'Result `done` flag');