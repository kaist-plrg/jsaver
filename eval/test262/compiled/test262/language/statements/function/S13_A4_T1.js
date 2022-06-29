function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The production FunctionDeclaration: "function Identifier (
    FormalParameterList_opt ) { FunctionBody }" is processed by function
    declarations
es5id: 13_A4_T1
description: Declaring a function that returns string
---*/
function __func() {
  return "zig-zig-sputnik";
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#1 

if (typeof __func !== "function") {
  $ERROR('#1: typeof __func === "function". Actual: typeof __func ===' + _typeof(__func));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__func() !== "zig-zig-sputnik") {
  $ERROR('#2: __func() === "zig-zig-sputnik". Actual: __func() ===' + __func());
} //
//////////////////////////////////////////////////////////////////////////////