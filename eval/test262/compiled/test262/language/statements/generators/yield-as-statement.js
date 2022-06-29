var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(g2);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` is a valid statement within generator function bodies.
es6id: 14.4
features: [generators]
---*/
var iter, result;

function g1() {
  return regeneratorRuntime.wrap(function g1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function g2() {
  return regeneratorRuntime.wrap(function g2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return 1;

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

iter = g1();
result = iter.next();
assert.sameValue(result.value, undefined, 'Without right-hand-side: first result `value`');
assert.sameValue(result.done, false, 'Without right-hand-side: first result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Without right-hand-side: second result `value`');
assert.sameValue(result.done, true, 'Without right-hand-eside: second result `done` flag');
iter = g2();
result = iter.next();
assert.sameValue(result.value, 1, 'With right-hand-side: first result `value`');
assert.sameValue(result.done, false, 'With right-hand-side: first result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'With right-hand-side: second result `value`');
assert.sameValue(result.done, true, 'With right-hand-eside: second result `done` flag');