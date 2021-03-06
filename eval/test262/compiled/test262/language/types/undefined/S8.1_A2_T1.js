function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Any variable that has not been assigned a value has the value undefined
es5id: 8.1_A2_T1
description: Check that var x have value and type undefined
---*/
var x; ///////////////////////////////////////////////////////////////////
// CHECK#1

if (!(x === undefined)) {
  $ERROR('#1: var x; x === undefined. Actual: ' + x);
} //
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// CHECK#2


if (!(typeof x === "undefined")) {
  $ERROR('#2: var x; typeof(x) === "undefined". Actual: ' + _typeof(x));
} //
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// CHECK#3


if (!(x === void 0)) {
  $ERROR('#3: var x; x === void 0. Actual: ' + x);
} //
///////////////////////////////////////////////////////////////////