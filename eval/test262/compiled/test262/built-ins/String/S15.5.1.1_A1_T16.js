function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T16
description: Call String() with .12345 and analogous numbers
---*/
var __str = String(.12345); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


if (typeof __str !== "string") {
  $ERROR('#1: __str = String(.12345); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__str !== "0.12345") {
  $ERROR('#2: __str = String(.12345); __str === "0.12345". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////


__str = String(.012345); //////////////////////////////////////////////////////////////////////////////
//CHECK#3

if (typeof __str !== "string") {
  $ERROR('#3: __str = String(.012345); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#4


if (__str !== "0.012345") {
  $ERROR('#4: __str = String(.012345); __str === "0.012345". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////


__str = String(.0012345); //////////////////////////////////////////////////////////////////////////////
//CHECK#5

if (typeof __str !== "string") {
  $ERROR('#5: __str = String(.0012345); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#6


if (__str !== "0.0012345") {
  $ERROR('#6: __str = String(.0012345); __str === "0.0012345". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////


__str = String(.00000012345); //////////////////////////////////////////////////////////////////////////////
//CHECK#7

if (typeof __str !== "string") {
  $ERROR('#7: __str = String(.00000012345); typeof __str === "string". Actual: typeof __str ===' + _typeof(__str));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#8


if (__str !== "1.2345e-7") {
  $ERROR('#8: __str = String(.00000012345); __str === "1.2345e-7". Actual: __str ===' + __str);
} //
//////////////////////////////////////////////////////////////////////////////