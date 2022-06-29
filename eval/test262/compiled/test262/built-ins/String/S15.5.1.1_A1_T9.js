function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T9
description: Call String(this)
---*/
var toString = function toString() {
  return "__THIS__";
};

var __str = String(this); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


if (typeof __str !== "string") {
  $ERROR('#1: __str = String(this); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__str !== "__THIS__") {
  $ERROR('#2: toString=function(){return "__THIS__";}; __str = String(this); __str === "__THIS__". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////