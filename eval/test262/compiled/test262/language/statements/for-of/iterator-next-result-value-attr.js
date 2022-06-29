function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.13 S5.f
description: >
    The `value` of iteration result objects should be retrieved using the Get
    abstract operation.
features: [Symbol.iterator]
---*/
var iterable = {};
var i, firstIterResult;

iterable[Symbol.iterator] = function () {
  var finalIterResult = {
    value: null,
    done: true
  };
  var nextIterResult = firstIterResult;
  return {
    next: function next() {
      var iterResult = nextIterResult;
      nextIterResult = finalIterResult;
      return iterResult;
    }
  };
};

firstIterResult = {
  value: 45,
  done: false
};
i = 0;

var _iterator = _createForOfIteratorHelper(iterable),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var x = _step.value;
    assert.sameValue(x, 45);
    i++;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  done: false
};
Object.defineProperty(firstIterResult, 'value', {
  get: function get() {
    return 23;
  }
});
i = 0;

var _iterator2 = _createForOfIteratorHelper(iterable),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var x = _step2.value;
    assert.sameValue(x, 23);
    i++;
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

assert.sameValue(i, 1);