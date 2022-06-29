function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Number([value]) returns a number value (not a Number object) computed by
    ToNumber(value) if value was supplied
es5id: 15.7.1.1_A1
description: Used values "10", 10, new String("10"), new Object(10) and "abc"
---*/
//CHECK#1
if (typeof Number("10") !== "number") {
  $ERROR('#1: typeof Number("10") should be "number", actual is "' + _typeof(Number("10")) + '"');
} //CHECK#2


if (typeof Number(10) !== "number") {
  $ERROR('#2: typeof Number(10) should be "number", actual is "' + _typeof(Number(10)) + '"');
} //CHECK#3


if (typeof Number(new String("10")) !== "number") {
  $ERROR('#3: typeof Number(new String("10")) should be "number", actual is "' + _typeof(Number(new String("10"))) + '"');
} //CHECK#4


if (typeof Number(new Object(10)) !== "number") {
  $ERROR('#4: typeof Number(new Object(10)) should be "number", actual is "' + _typeof(Number(new Object(10))) + '"');
} //CHECK #5


assert.sameValue(Number("abc"), NaN, "Number('abc')");