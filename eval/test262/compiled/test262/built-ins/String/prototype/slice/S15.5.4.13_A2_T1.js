function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end) returns a string value(not object)
es5id: 15.5.4.13_A2_T1
description: Checking type of slice()
---*/
var __string = new String("this is a string object"); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


if (typeof __string.slice() !== "string") {
  $ERROR('#1: __string = new String("this is a string object"); typeof __string.slice() === "string". Actual: ' + _typeof(__string.slice()));
} //
//////////////////////////////////////////////////////////////////////////////