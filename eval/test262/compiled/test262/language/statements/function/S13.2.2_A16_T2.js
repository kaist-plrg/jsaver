function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: FunctionExpression within a new statement is admitted
es5id: 13.2.2_A16_T2
description: >
    Using "var __obj = new function __func(arg){this.prop=arg;}(5)" as
    FunctionExpression
---*/
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func !== "undefined") {
  $ERROR('#1: typeof __func === "undefined". Actual: typeof __func ===' + (typeof __func === "undefined" ? "undefined" : _typeof(__func)));
} //
//////////////////////////////////////////////////////////////////////////////


var __obj = new function __func(arg) {
  this.prop = arg;
}(5); //////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__obj.prop !== 5) {
  $ERROR('#2: __obj.prop === 5. Actual: __obj.prop ===' + __obj.prop);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#3


if (typeof __func !== "undefined") {
  $ERROR('#3: typeof __func === "undefined". Actual: typeof __func ===' + (typeof __func === "undefined" ? "undefined" : _typeof(__func)));
} //
//////////////////////////////////////////////////////////////////////////////