function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"var\" does not override function declaration"
es5id: 13_A19_T2
description: >
    Creating a function and a variable with identical Identifiers
    within function scope
---*/
(function () {
  // since "var" does not override function declaration __decl is set to function
  //////////////////////////////////////////////////////////////////////////////
  //CHECK#1
  if (typeof __decl !== "function") {
    $ERROR('#1: typeof __decl === "function". Actual: typeof __decl ===' + _typeof(__decl));
  } //
  //////////////////////////////////////////////////////////////////////////////


  var __decl = 1; //since statement was evaluted __decl turns to 1 from function
  //////////////////////////////////////////////////////////////////////////////
  //CHECK#2

  if (__decl !== 1) {
    $ERROR('#2: __decl === 1. Actual: __decl ===' + __decl);
  } //
  //////////////////////////////////////////////////////////////////////////////


  function __decl() {
    return 1;
  }
})();