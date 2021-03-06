function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function is a data
es5id: 13_A10
description: Using function as a property of an object
---*/
function __ziggy__func() {
  return "ziggy stardust";
}

var __music_box = {};
__music_box.ziggy = __ziggy__func; //////////////////////////////////////////////////////////////////////////////
//CHECK#

if (typeof __music_box.ziggy !== "function") {
  $ERROR('#1: typeof __music_box.ziggy === "function". Actual: typeof __music_box.ziggy ===' + _typeof(__music_box.ziggy));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__music_box.ziggy() !== "ziggy stardust") {
  $ERROR('#2: __music_box.ziggy() === "ziggy stardust". Actual: __music_box.ziggy() ===' + __music_box.ziggy());
} //
//////////////////////////////////////////////////////////////////////////////