function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the [[Construct]] property for a Function object F is called,
    and the object created in the function is returned, the object (declared with "this" within a function) will be strong and healthy
es5id: 13.2.2_A15_T3
description: >
    Function declared at the end of the program and "obj" property is
    declared with "var obj = {}"
---*/
var __FACTORY, __obj;

__FACTORY = function __FACTORY() {
  this.prop = 1;
  var obj = {};
  obj.prop = "A";
  obj.slot = this;
  return obj;
};

__obj = new __FACTORY(); //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (typeof obj !== "undefined") {
  $ERROR('#1: typeof obj === "undefined". Actual: typeof obj ===' + (typeof obj === "undefined" ? "undefined" : _typeof(obj)));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__obj.prop !== "A") {
  $ERROR('#2: __obj.prop === "A". Actual: __obj.prop ===' + __obj.prop);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#3


if (__obj.slot.prop !== 1) {
  $ERROR('#3: __obj.slot.prop ===1. Actual: __obj.slot.prop ===' + __obj.slot.prop);
} //
//////////////////////////////////////////////////////////////////////////////