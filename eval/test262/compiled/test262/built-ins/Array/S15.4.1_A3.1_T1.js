function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When Array is called as a function rather than as a constructor,
    it creates and initialises a new Array object
es5id: 15.4.1_A3.1_T1
description: Checking use typeof, instanceof
---*/
//CHECK#1
if (_typeof(Array()) !== "object") {
  $ERROR('#1: typeof Array() === "object". Actual: ' + _typeof(Array()));
} //CHECK#2


if (Array() instanceof Array !== true) {
  $ERROR('#2: (Array() instanceof Array) === true. Actual: ' + (Array() instanceof Array));
}