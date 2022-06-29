function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.13
description: >
    Iterators should be closed via their `return` method when iteration is
    interrupted via a `throw` statement.
features: [Symbol.iterator]
---*/
var startedCount = 0;
var returnCount = 0;
var iterationCount = 0;
var iterable = {};

iterable[Symbol.iterator] = function () {
  return {
    next: function next() {
      startedCount += 1;
      return {
        done: false,
        value: null
      };
    },
    "return": function _return() {
      returnCount += 1;
      return {};
    }
  };
};

try {
  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var x = _step.value;
      assert.sameValue(startedCount, 1, 'Value is retrieved');
      assert.sameValue(returnCount, 0, 'Iterator is not closed');
      iterationCount += 1;
      throw 0;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} catch (err) {}

assert.sameValue(startedCount, 1, 'Iterator does not restart following interruption');
assert.sameValue(iterationCount, 1, 'A single iteration occurs');
assert.sameValue(returnCount, 1, 'Iterator is closed after `throw` statement');