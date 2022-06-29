function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If value is not supplied, the empty string "" is returned
es5id: 15.5.1.1_A2_T1
description: Call String()
---*/
var __str = String(); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


if (typeof __str !== "string") {
  $ERROR('#1: __str = String(); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__str !== "") {
  $ERROR('#2: __str = String(); __str === "". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////