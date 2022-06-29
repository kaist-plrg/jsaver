function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: NaN expression has a type Number
es5id: 8.5_A3
description: Check type of NaN
---*/
var x = NaN; ///////////////////////////////////////////////////////
// CHECK#1

if (typeof x !== "number") {
  $ERROR('#1: var x=NaN; typeof(x) === "number". Actual: ' + _typeof(x));
} //
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// CHECK#2


if (typeof NaN !== "number") {
  $ERROR('#2: typeof(NaN) === "number". Actual: ' + (typeof NaN === "undefined" ? "undefined" : _typeof(NaN)));
} //
//////////////////////////////////////////////////////////