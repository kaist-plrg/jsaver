function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the Object constructor is called with one argument value and
    the type of value is Number, return ToObject(number)
es5id: 15.2.2.1_A5_T1
description: Argument value is any number
---*/
var num = 1.0; //CHECK#1

if (typeof num !== 'number') {
  $ERROR('#1: 1.0 is NOT a number');
}

var n_obj = new Object(num); //CHECK#2

if (n_obj.constructor !== Number) {
  $ERROR('#2: When the Object constructor is called with Number argument return ToObject(number)');
} //CHECK#3


if (_typeof(n_obj) !== 'object') {
  $ERROR('#3: When the Object constructor is called with Number argument return ToObject(number)');
} //CHECK#4


if (n_obj != num) {
  $ERROR('#4: When the Object constructor is called with Number argument return ToObject(number)');
} //CHECK#5


if (n_obj === num) {
  $ERROR('#5: When the Object constructor is called with Number argument return ToObject(number)');
}