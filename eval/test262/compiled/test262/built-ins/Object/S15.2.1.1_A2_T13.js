function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the Object function is called with one argument value,
    and the value neither is null nor undefined, and is supplied, return ToObject(value)
es5id: 15.2.1.1_A2_T13
description: Calling Object function with boolean expression as argument value
---*/
var obj = Object(1 === 1 && !false); //CHECK#1

if (obj.constructor !== Boolean) {
  $ERROR('#1: Object(expression) returns ToObject(expression)');
} //CHECK#1.1


if (_typeof(obj) !== "object") {
  $ERROR('#1.1: Object(expression) returns ToObject(expression)');
} //CHECK#2


if (!obj) {
  $ERROR('#2: Object(expression) returns ToObject(expression)');
} //CHECK#3


if (obj === true) {
  $ERROR('#3: Object(expression) returns ToObject(expression)');
}