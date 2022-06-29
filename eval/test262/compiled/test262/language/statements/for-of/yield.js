function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(values);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.13
description: >
    Control flow during body evaluation should honor `yield` statements.
features: [generators]
---*/
function values() {
  return regeneratorRuntime.wrap(function values$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 1;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var dataIterator = values();
var controlIterator = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _iterator, _step, x;

  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iterator = _createForOfIteratorHelper(dataIterator);
          _context2.prev = 1;

          _iterator.s();

        case 3:
          if ((_step = _iterator.n()).done) {
            _context2.next = 11;
            break;
          }

          x = _step.value;
          i++;
          _context2.next = 8;
          return;

        case 8:
          j++;

        case 9:
          _context2.next = 3;
          break;

        case 11:
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);

          _iterator.e(_context2.t0);

        case 16:
          _context2.prev = 16;

          _iterator.f();

          return _context2.finish(16);

        case 19:
          k++;

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee, null, [[1, 13, 16, 19]]);
})();
var i = 0;
var j = 0;
var k = 0;
controlIterator.next();
assert.sameValue(i, 1, 'First iteration: pre-yield');
assert.sameValue(j, 0, 'First iteration: post-yield');
assert.sameValue(k, 0, 'First iteration: post-for-of');
controlIterator.next();
assert.sameValue(i, 2, 'Second iteration: pre-yield');
assert.sameValue(j, 1, 'Second iteration: post-yield');
assert.sameValue(k, 0, 'Second iteration: post-for-of');
controlIterator.next();
assert.sameValue(i, 2, 'Third iteration: pre-yield');
assert.sameValue(j, 2, 'Third iteration: post-yield');
assert.sameValue(k, 1, 'Third iteration: post-for-of');