function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.prototype is itself Number object
es5id: 15.7.3.1_A2_T2
description: >
    Checking type of Number.prototype property - test based on
    overwriting of Number.prototype.toString
---*/
//CHECK#1
if (_typeof(Number.prototype) !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

Number.prototype.toString = Object.prototype.toString;

if (Number.prototype.toString() !== "[object Number]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Number"');
}