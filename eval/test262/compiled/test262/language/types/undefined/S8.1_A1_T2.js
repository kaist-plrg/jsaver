function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Undefined type has one value, called undefined
es5id: 8.1_A1_T2
description: Check typeof(undefined) and typeof(void 0)
---*/
// CHECK#1
if (!(typeof undefined === "undefined")) {
  ERROR('#1: typeof(undefined) === "undefined". Actual: ' + (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)));
} // CHECK#2


if (!(typeof void 0 === "undefined")) {
  ERROR('#2: typeof(void 0) === "undefined". Actual: ' + _typeof(void 0));
} // CHECK#3


if (!(undefined === void 0)) {
  ERROR('#3: undefined === void 0');
}