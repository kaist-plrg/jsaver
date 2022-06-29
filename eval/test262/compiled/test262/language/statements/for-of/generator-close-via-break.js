function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(values);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.13
description: >
    Generators should be closed via their `return` method when iteration is
    interrupted via a `break` statement.
features: [generators]
---*/
var startedCount = 0;
var finallyCount = 0;
var iterationCount = 0;

function values() {
  return regeneratorRuntime.wrap(function values$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          startedCount += 1;
          _context.prev = 1;
          _context.next = 4;
          return;

        case 4:
          $ERROR('This code is unreachable (within `try` block)');

        case 5:
          _context.prev = 5;
          finallyCount += 1;
          return _context.finish(5);

        case 8:
          $ERROR('This code is unreachable (following `try` statement)');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1,, 5, 8]]);
}

var iterable = values();
assert.sameValue(startedCount, 0, 'Generator is initialized in suspended state');

var _iterator = _createForOfIteratorHelper(iterable),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var x = _step.value;
    assert.sameValue(startedCount, 1, 'Generator executes prior to first iteration');
    assert.sameValue(finallyCount, 0, 'Generator is paused during first iteration');
    iterationCount += 1;
    break;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

assert.sameValue(startedCount, 1, 'Generator does not restart following interruption');
assert.sameValue(iterationCount, 1, 'A single iteration occurs');
assert.sameValue(finallyCount, 1, 'Generator is closed after `break` statement');