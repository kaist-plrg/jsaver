function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the Object function is called with one argument value,
    and the value neither is null nor undefined, and is supplied, return ToObject(value)
es5id: 15.2.1.1_A2_T10
description: Calling Object function with array of numbers as argument value
---*/
var arr = [1, 2, 3]; //CHECK#1

if (_typeof(arr) !== 'object') {
  $ERROR('#1: arr = [1,2,3] is NOT an object');
}

var n_obj = Object(arr);
arr.push(4); //CHECK#2

if (n_obj !== arr || n_obj[3] !== 4) {
  $ERROR('#2: Object([1,2,3]) returns ToObject([1,2,3])');
}