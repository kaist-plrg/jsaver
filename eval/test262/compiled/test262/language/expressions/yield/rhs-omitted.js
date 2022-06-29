var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(g2),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(g3),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(g4),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(g5);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` is a valid expression within generator function bodies.
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
          return;

        case 2:
          _context2.t0 = _context2.sent;
          [_context2.t0];

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function g3() {
  return regeneratorRuntime.wrap(function g3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return;

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function g4() {
  return regeneratorRuntime.wrap(function g4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return;

        case 2:
          _context4.next = 4;
          return;

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function g5() {
  return regeneratorRuntime.wrap(function g5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return;

        case 2:
          if (!_context5.sent) {
            _context5.next = 7;
            break;
          }

          _context5.next = 5;
          return;

        case 5:
          _context5.next = 9;
          break;

        case 7:
          _context5.next = 9;
          return;

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

iter = g1();
result = iter.next();
assert.sameValue(result.value, undefined, 'Within grouping operator: result `value`');
assert.sameValue(result.done, false, 'Within grouping operator: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Following grouping operator: result `value`');
assert.sameValue(result.done, true, 'Following grouping operator: result `done` flag');
iter = g2();
result = iter.next();
assert.sameValue(result.value, undefined, 'Within array literal: result `value`');
assert.sameValue(result.done, false, 'Within array literal: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Following array literal: result `value`');
assert.sameValue(result.done, true, 'Following array literal: result `done` flag');
iter = g3();
result = iter.next();
assert.sameValue(result.value, undefined, 'Within object literal: result `value`');
assert.sameValue(result.done, false, 'Within object literal: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Following object literal: result `value`');
assert.sameValue(result.done, true, 'Following object literal: result `done` flag');
iter = g4();
result = iter.next();
assert.sameValue(result.value, undefined, 'First expression in comma expression: result `value`');
assert.sameValue(result.done, false, 'First expression in comma expression: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Second expression in comma expression: result `value`');
assert.sameValue(result.done, false, 'Second expression in comma expression: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Following comma expression: result `value`');
assert.sameValue(result.done, true, 'Following comma expression: result `done` flag');
iter = g5();
result = iter.next();
assert.sameValue(result.value, undefined, 'Conditional expression in conditional operator: result `value`');
assert.sameValue(result.done, false, 'Conditional expression in conditional operator: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Branch in conditional operator: result `value`');
assert.sameValue(result.done, false, 'Branch in conditional operator: result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Following conditional operator: result `value`');
assert.sameValue(result.done, true, 'Following conditional operator: result `done` flag');