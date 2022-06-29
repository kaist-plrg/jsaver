function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If there is already a property of the variable object with the
    name of a declared variable, the value of the property and its attributes
    are not changed
es5id: 10.2.1_A5.2_T1
description: >
    Checking existence of the variable object property with formal
    parameter
---*/
//CHECK#1
function f1(x) {
  var x;
  return _typeof(x);
}

assert.sameValue(f1(1), "number"); //CHECK#2

function f2(x) {
  var x;
  return x;
}

assert.sameValue(f2(1), 1);