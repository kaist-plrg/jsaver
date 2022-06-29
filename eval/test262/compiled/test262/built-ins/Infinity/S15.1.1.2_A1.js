function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of Infinity is Number.POSITIVE_INFINITY
es5id: 15.1.1.2_A1
description: Use typeof, isNaN, isFinite
---*/
// CHECK#1
if (typeof Infinity !== "number") {
  $ERROR('#1: typeof(Infinity) === "number". Actual: ' + (typeof Infinity === "undefined" ? "undefined" : _typeof(Infinity)));
} // CHECK#2


if (isFinite(Infinity) !== false) {
  $ERROR('#2: Infinity === Not-a-Finite. Actual: ' + Infinity);
} // CHECK#3


if (isNaN(Infinity) !== false) {
  $ERROR('#3: Infinity === Not-a-Number. Actual: ' + Infinity);
} // CHECK#4


if (Infinity !== Number.POSITIVE_INFINITY) {
  $ERROR('#4: Infinity === Number.POSITIVE_INFINITY. Actual: ' + Infinity);
}