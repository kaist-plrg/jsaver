function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of undefined is undefined
esid: sec-undefined
description: Use typeof, isNaN, isFinite
---*/
// CHECK#1
if (typeof undefined !== "undefined") {
  $ERROR('#1: typeof(undefined) === "undefined". Actual: ' + (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)));
} // CHECK#2


if (undefined !== void 0) {
  $ERROR('#2: undefined === void 0. Actual: ' + undefined);
} // CHECK#3


if (undefined !== eval("var x")) {
  $ERROR('#3: undefined === eval("var x"). Actual: ' + undefined);
}