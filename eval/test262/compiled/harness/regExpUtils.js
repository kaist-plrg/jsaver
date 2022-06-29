function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2017 Mathias Bynens.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Collection of functions used to assert the correctness of RegExp objects.
defines: [buildString, testPropertyEscapes, matchValidator]
---*/
function buildString(args) {
  // Use member expressions rather than destructuring `args` for improved
  // compatibility with engines that only implement assignment patterns
  // partially or not at all.
  var loneCodePoints = args.loneCodePoints;
  var ranges = args.ranges;
  var CHUNK_SIZE = 10000;
  var result = Reflect.apply(String.fromCodePoint, null, loneCodePoints);

  for (var i = 0; i < ranges.length; i++) {
    var range = ranges[i];
    var start = range[0];
    var end = range[1];
    var codePoints = [];

    for (var length = 0, codePoint = start; codePoint <= end; codePoint++) {
      codePoints[length++] = codePoint;

      if (length === CHUNK_SIZE) {
        result += Reflect.apply(String.fromCodePoint, null, codePoints);
        codePoints.length = length = 0;
      }
    }

    result += Reflect.apply(String.fromCodePoint, null, codePoints);
  }

  return result;
}

function testPropertyEscapes(regex, string, expression) {
  if (!regex.test(string)) {
    var _iterator = _createForOfIteratorHelper(string),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var symbol = _step.value;
        var hex = symbol.codePointAt(0).toString(16).toUpperCase().padStart(6, "0");
        assert(regex.test(symbol), "`".concat(expression, "` should match U+").concat(hex, " (`").concat(symbol, "`)"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
} // Returns a function that will validate RegExp match result
//
// Example:
//
//    var validate = matchValidator(['b'], 1, 'abc');
//    validate(/b/.exec('abc'));
//


function matchValidator(expectedEntries, expectedIndex, expectedInput) {
  return function (match) {
    assert.compareArray(match, expectedEntries, 'Match entries');
    assert.sameValue(match.index, expectedIndex, 'Match index');
    assert.sameValue(match.input, expectedInput, 'Match input');
  };
}