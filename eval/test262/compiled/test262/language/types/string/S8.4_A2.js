function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Empty string has type string
es5id: 8.4_A2
description: Create empty string and check it type
---*/
/////////////////////////////////////////////////////////
// CHECK#1
var str = '';

if (typeof str !== 'string') {
  $ERROR('#1: var str = \'\'; typeof(str) === \'string\'. Actual: ' + _typeof(str));
} //
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// CHECK#2


var str = "";

if (typeof str !== "string") {
  $ERROR('#2: var str = ""; typeof(str) === "string". Actual: ' + str);
} //
////////////////////////////////////////////////////////