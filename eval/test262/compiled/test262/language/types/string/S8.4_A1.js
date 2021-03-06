function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Any variable that has been assigned with string literal has the type
    string
es5id: 8.4_A1
description: Check type of variable that has been assigned with string literal
---*/
/////////////////////////////////////////////////////////
// CHECK#1
var str = "abcdfg";

if (typeof str !== "string") {
  $ERROR('#1: var str="abcdfg"; typeof(str) === "string". Actual: ' + _typeof(str));
} //
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// CHECK#2


var str2 = 'qwerty';

if (typeof str2 !== "string") {
  $ERROR('#2: var str2=\'qwerty\'; typeof(str) === "string". Actual: ' + _typeof(str2));
} //
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// CHECK#3


var __str = "BCDEFGH";

if (typeof __str !== "string") {
  $ERROR("#3: var __str='\\u0042\\u0043\\u0044\\u0045\\u0046\\u0047\\u0048'; typeof(__str) === \"string\". Actual: " + _typeof(__str));
} //
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// CHECK#4


var str__ = "BCDEFGH";

if (typeof str__ !== "string") {
  $ERROR('#4: var str__="abcdfg"; typeof(str__) === "string". Actual: ' + _typeof(str__));
} //
////////////////////////////////////////////////////////