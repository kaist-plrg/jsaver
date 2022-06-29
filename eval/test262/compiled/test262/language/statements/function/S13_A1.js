function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    "x=function y(){}" statement does not store a reference to the new
    function in the varaible y(Identifier)
es5id: 13_A1
description: Checking the type of y
---*/
var __func = function __exp__func() {
  return 0;
}; ////////////////////////////////////////////////
// //////////////////////////////
//CHECK#1


if (typeof __func !== "function") {
  $ERROR('#1: typeof __func === "function". Actual: typeof __func ===' + _typeof(__func));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (typeof __exp__func !== "undefined") {
  $ERROR('#2: typeof __exp__func === "undefined". Actual: typeof __exp__func ===' + (typeof __exp__func === "undefined" ? "undefined" : _typeof(__exp__func)));
} //
//////////////////////////////////////////////////////////////////////////////