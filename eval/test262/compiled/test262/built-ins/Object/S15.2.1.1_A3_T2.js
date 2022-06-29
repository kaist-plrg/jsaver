function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Since calling Object as a function is identical to calling a function,
    list of arguments bracketing is allowed
es5id: 15.2.1.1_A3_T2
description: Creating an object with "Object(null,2,3)"
---*/
var obj = Object(null, 2, 3); //CHECK#1

if (obj.constructor !== Object) {
  $ERROR('#1: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
} //CHECK#2


if (_typeof(obj) !== "object") {
  $ERROR('#2: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}