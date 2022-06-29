function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 7.4.3
description: >
    The `done` value of iteration result objects should be interpreted as
    incomplete as per `ToBoolean` (7.1.2).
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
  value: null,
  done: undefined
};
i = 0;

var _iterator = _createForOfIteratorHelper(iterable),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var x = _step.value;
    i++;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null
};
i = 0;

var _iterator2 = _createForOfIteratorHelper(iterable),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var x = _step2.value;
    i++;
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: null
};
i = 0;

var _iterator3 = _createForOfIteratorHelper(iterable),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var x = _step3.value;
    i++;
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: false
};
i = 0;

var _iterator4 = _createForOfIteratorHelper(iterable),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var x = _step4.value;
    i++;
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: true
};
i = 0;

var _iterator5 = _createForOfIteratorHelper(iterable),
    _step5;

try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var x = _step5.value;
    i++;
  }
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}

assert.sameValue(i, 0);
firstIterResult = {
  value: null,
  done: 1
};
i = 0;

var _iterator6 = _createForOfIteratorHelper(iterable),
    _step6;

try {
  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
    var x = _step6.value;
    i++;
  }
} catch (err) {
  _iterator6.e(err);
} finally {
  _iterator6.f();
}

assert.sameValue(i, 0);
firstIterResult = {
  value: null,
  done: 0
};
i = 0;

var _iterator7 = _createForOfIteratorHelper(iterable),
    _step7;

try {
  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
    var x = _step7.value;
    i++;
  }
} catch (err) {
  _iterator7.e(err);
} finally {
  _iterator7.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: -0
};
i = 0;

var _iterator8 = _createForOfIteratorHelper(iterable),
    _step8;

try {
  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
    var x = _step8.value;
    i++;
  }
} catch (err) {
  _iterator8.e(err);
} finally {
  _iterator8.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: NaN
};
i = 0;

var _iterator9 = _createForOfIteratorHelper(iterable),
    _step9;

try {
  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
    var x = _step9.value;
    i++;
  }
} catch (err) {
  _iterator9.e(err);
} finally {
  _iterator9.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: ''
};
i = 0;

var _iterator10 = _createForOfIteratorHelper(iterable),
    _step10;

try {
  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
    var x = _step10.value;
    i++;
  }
} catch (err) {
  _iterator10.e(err);
} finally {
  _iterator10.f();
}

assert.sameValue(i, 1);
firstIterResult = {
  value: null,
  done: '0'
};
i = 0;

var _iterator11 = _createForOfIteratorHelper(iterable),
    _step11;

try {
  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
    var x = _step11.value;
    i++;
  }
} catch (err) {
  _iterator11.e(err);
} finally {
  _iterator11.f();
}

assert.sameValue(i, 0);
firstIterResult = {
  value: null,
  done: Symbol()
};
i = 0;

var _iterator12 = _createForOfIteratorHelper(iterable),
    _step12;

try {
  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
    var x = _step12.value;
    i++;
  }
} catch (err) {
  _iterator12.e(err);
} finally {
  _iterator12.f();
}

assert.sameValue(i, 0);
firstIterResult = {
  value: null,
  done: {}
};
i = 0;

var _iterator13 = _createForOfIteratorHelper(iterable),
    _step13;

try {
  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
    var x = _step13.value;
    i++;
  }
} catch (err) {
  _iterator13.e(err);
} finally {
  _iterator13.f();
}

assert.sameValue(i, 0);
firstIterResult = {
  value: null
};
Object.defineProperty(firstIterResult, 'done', {
  get: function get() {
    return true;
  }
});
i = 0;

var _iterator14 = _createForOfIteratorHelper(iterable),
    _step14;

try {
  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
    var x = _step14.value;
    i++;
  }
} catch (err) {
  _iterator14.e(err);
} finally {
  _iterator14.f();
}

assert.sameValue(i, 0);