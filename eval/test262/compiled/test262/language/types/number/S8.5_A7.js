function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: +Infinity expression has a type Number
es5id: 8.5_A7
description: Check type of +Infinity
---*/
var x = +Infinity; ///////////////////////////////////////////////////////
// CHECK#1

if (typeof x !== "number") {
  $ERROR('#1: var x=+Infinity; typeof(x) === "number". Actual: ' + _typeof(x));
} //
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// CHECK#2


if (typeof +Infinity !== "number") {
  $ERROR('#2: typeof(+Infinity) === "number". Actual: ' + _typeof(+Infinity));
} //
//////////////////////////////////////////////////////////