function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - deleting property of prototype causes
    prototype index property not to be visited on an Array-like Object
---*/
function callbackfn(val, idx, obj) {
  return idx === 1 && typeof val === "undefined";
}

var obj = {
  2: 2,
  length: 20
};
Object.defineProperty(obj, "0", {
  get: function get() {
    delete Object.prototype[1];
    return 0;
  },
  configurable: true
});
Object.prototype[1] = 1;
var testResult = Array.prototype.map.call(obj, callbackfn);
assert.sameValue(testResult.length, 20, 'testResult.length');
assert.sameValue(_typeof(testResult[1]), "undefined", 'typeof testResult[1]');