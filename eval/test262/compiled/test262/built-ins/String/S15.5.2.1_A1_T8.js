function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
    The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied
es5id: 15.5.2.1_A1_T8
description: Creating string object with "new String(function(){})"
---*/
var __stored__Function__prototype__toString = Function.prototype.toString;

Function.prototype.toString = function () {
  return "SHIFTED";
};

var __str = new String(function () {});

Function.prototype.toString = __stored__Function__prototype__toString; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (_typeof(__str) !== "object") {
  $ERROR('#1: __str = new String(function(){}); typeof __str === "object". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#1.5


if (__str.constructor !== String) {
  $ERROR('#1.5: __str = new String(function(){}); __str.constructor === String. Actual: __str.constructor ===' + __str.constructor);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__str != "SHIFTED") {
  $ERROR('#2: Function.prototype.toString=function(){return "SHIFTED"}; __str = new String(function(){}); __str =="SHIFTED". Actual: __str ==' + __str);
} //
//////////////////////////////////////////////////////////////////////////////