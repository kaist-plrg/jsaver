function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T7
description: Applying grouping operator to typeof operator
---*/
//CHECK#1
if (typeof x !== "undefined") {
  $ERROR('#1: typeof (x) === "undefined". Actual: ' + (typeof x === "undefined" ? "undefined" : _typeof(x)));
}