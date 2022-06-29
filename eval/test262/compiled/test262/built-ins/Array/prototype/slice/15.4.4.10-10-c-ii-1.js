function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.slice
description: >
    Array.prototype.slice will slice a string from start to end when
    index property (read-only) exists in Array.prototype (Step 10.c.ii)
---*/
var arrObj = [1, 2, 3];
Object.defineProperty(Array.prototype, "0", {
  value: "test",
  writable: false,
  configurable: true
});
var newArr = arrObj.slice(0, 1);
assert(newArr.hasOwnProperty("0"), 'newArr.hasOwnProperty("0") !== true');
assert.sameValue(newArr[0], 1, 'newArr[0]');
assert.sameValue(_typeof(newArr[1]), "undefined", 'typeof newArr[1]');