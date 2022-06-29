function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset
description: >
  Iterators should be closed via their `return` method when iteration is
  interrupted via a `continue` statement.
info: |
  13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind, lhsKind, labelSet )
    ...
    5. Repeat,
      ...
      i. Let result be the result of evaluating stmt.
      ...
      k. If LoopContinues(result, labelSet) is false, then
        i. If iterationKind is enumerate, then
          ...
        ii. Else,
          1. Assert: iterationKind is iterate.
          2. Return ? IteratorClose(iteratorRecord, UpdateEmpty(result, V)).
      ...

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

L: do {
  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var x = _step.value;
      assert.sameValue(startedCount, 1, 'Value is retrieved');
      assert.sameValue(returnCount, 0, 'Iterator is not closed');
      iterationCount += 1;
      continue L;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} while (false);

assert.sameValue(startedCount, 1, 'Iterator does not restart following interruption');
assert.sameValue(iterationCount, 1, 'A single iteration occurs');
assert.sameValue(returnCount, 1, 'Iterator is closed after `continue` statement');