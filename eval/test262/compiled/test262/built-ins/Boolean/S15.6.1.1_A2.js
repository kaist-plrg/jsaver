function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Boolean() returns false
esid: sec-terms-and-definitions-boolean-value
description: Call Boolean() and check result
---*/
//CHECK#1
if (typeof Boolean() !== "boolean") {
  $ERROR('#1: typeof Boolean() should be "boolean", actual is "' + _typeof(Boolean()) + '"');
} //CHECK#2


if (Boolean() !== false) {
  $ERROR('#2: Boolean() should be false');
}