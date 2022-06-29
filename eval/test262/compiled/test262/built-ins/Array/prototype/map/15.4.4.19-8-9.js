function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - modifications to length don't change number
    of iterations on an Array
---*/
var called = 0;

function callbackfn(val, idx, obj) {
  called += 1;
  return val > 10;
}

var arr = [9,, 12];
Object.defineProperty(arr, "1", {
  get: function get() {
    arr.length = 2;
    return 8;
  },
  configurable: true
});
var testResult = arr.map(callbackfn);
assert.sameValue(testResult.length, 3, 'testResult.length');
assert.sameValue(called, 2, 'called');
assert.sameValue(_typeof(testResult[2]), "undefined", 'typeof testResult[2]');