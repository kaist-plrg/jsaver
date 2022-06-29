function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number() returns +0
es5id: 15.7.1.1_A2
description: Call Number() and check result
---*/
//CHECK#1
if (typeof Number() !== "number") {
  $ERROR('#1: typeof Number() should be "number", actual is "' + _typeof(Number()) + '"');
} //CHECK#2


if (Number() !== 0) {
  $ERROR('#2: Number() === 0, actual is ' + Number());
} else if (1 / Number() !== Number.POSITIVE_INFINITY) {
  $ERROR('#2: Number() === +0, actual is ' + Number());
}