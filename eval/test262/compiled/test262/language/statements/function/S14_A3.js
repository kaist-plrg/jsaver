function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Global FunctionDeclaration cannot be defined within the body of another
    FunctionDeclaration
es5id: 14_A3
description: Declaring a function within the body of another function
---*/
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func !== "function") {
  $ERROR('#1: typeof __func === "function". Actual:  typeof __func ===' + _typeof(__func));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (typeof __gunc !== "undefined") {
  $ERROR('#2: typeof __gunc === "undefined". Actual:  typeof __gunc ===' + (typeof __gunc === "undefined" ? "undefined" : _typeof(__gunc)));
} //
//////////////////////////////////////////////////////////////////////////////


function __func() {
  function __gunc() {
    return true;
  }

  ;
}