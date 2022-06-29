function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: function must be evaluated inside the expression
es5id: 13_A2_T3
description: >
    Defining function body with "return arguments[0] +"-"+
    arguments[1]"
---*/
var x = function __func() {
  return arguments[0] + "-" + arguments[1];
}("Obi", "Wan"); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


if (x !== "Obi-Wan") {
  $ERROR('#1: x === "Obi-Wan". Actual: x ===' + x);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (typeof __func !== 'undefined') {
  $ERROR('#2: typeof __func === \'undefined\'. Actual: typeof __func ===' + (typeof __func === "undefined" ? "undefined" : _typeof(__func)));
} //
//////////////////////////////////////////////////////////////////////////////