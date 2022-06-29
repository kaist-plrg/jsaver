function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - deleting own property causes index property
    not to be visited on an Array
---*/
function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return false;
  } else {
    return true;
  }
}

var arr = [1, 2];
Object.defineProperty(arr, "1", {
  get: function get() {
    return "6.99";
  },
  configurable: true
});
Object.defineProperty(arr, "0", {
  get: function get() {
    delete arr[1];
    return 0;
  },
  configurable: true
});
var testResult = arr.map(callbackfn);
assert.sameValue(testResult[0], true, 'testResult[0]');
assert.sameValue(_typeof(testResult[1]), "undefined", 'typeof testResult[1]');