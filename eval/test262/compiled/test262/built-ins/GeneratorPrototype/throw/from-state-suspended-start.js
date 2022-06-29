var _marked = /*#__PURE__*/regeneratorRuntime.mark(G);

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.4
description: >
    Resuming abruptly from a generator in the 'suspendedStart' state should
    honor the abrupt completion and trigger a transition into the 'completed'
    state.
features: [generators]
---*/
function E() {}

function G() {
  return regeneratorRuntime.wrap(function G$(_context) {
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
  }, _marked);
}

var iter;
iter = G();
assert["throws"](E, function () {
  iter["throw"](new E());
});
var result = iter.next();
assert.sameValue(result.value, undefined, 'Result `value`');
assert.sameValue(result.done, true, 'Result `done` flag');