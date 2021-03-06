function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The FunctionBody must be SourceElements
es5id: 13_A7_T1
description: Using only SourceElements within the FunctionBody
---*/
function __func() {
  'ground control to major tom';
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (typeof __func !== "function") {
  $ERROR('#1: typeof __func === "function". Actual: typeof __func ===' + _typeof(__func));
} //
//////////////////////////////////////////////////////////////////////////////


function __func__2() {
  b;
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#2

if (typeof __func__2 !== "function") {
  $ERROR('#2: typeof __func__2 === "function". Actual: typeof __func__2 ===' + _typeof(__func__2));
} //
//////////////////////////////////////////////////////////////////////////////


function __func__3() {
  1;
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#3

if (typeof __func__3 !== "function") {
  $ERROR('#3: typeof __func__3 === "function". Actual: typeof __func__3 ===' + _typeof(__func__3));
} //
//////////////////////////////////////////////////////////////////////////////


function __func__4() {
  1 + c;
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#4

if (typeof __func__4 !== "function") {
  $ERROR('#4: typeof __func__4 === "function". Actual: typeof __func__4 ===' + _typeof(__func__4));
} //
//////////////////////////////////////////////////////////////////////////////


function __func__5() {
  inc(d);
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#5

if (typeof __func__5 !== "function") {
  $ERROR('#5: typeof __func__5 === "function". Actual: typeof __func__5 ===' + _typeof(__func__5));
} //
//////////////////////////////////////////////////////////////////////////////


function __func__6() {
  var B = 1;
}

; //////////////////////////////////////////////////////////////////////////////
//CHECK#6

if (typeof __func__6 !== "function") {
  $ERROR('#6: typeof __func__6 === "function". Actual: typeof __func__6 ===' + _typeof(__func__6));
} //
//////////////////////////////////////////////////////////////////////////////
//function __func__7(){var \u003d = 1;};
////////////////////////////////////////////////////////////////////////////////
////CHECK#7
//if (typeof __func__7 !== "function") {
//	$ERROR('#7: The FunctionBody must be SourceElements');
//}
//
//////////////////////////////////////////////////////////////////////////////