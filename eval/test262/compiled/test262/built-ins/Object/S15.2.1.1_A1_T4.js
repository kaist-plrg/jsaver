function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the Object(value) is called and the value is null, undefined or not supplied,
    create and return a new Object object if the object constructor had been called with the same arguments (15.2.2.1)
es5id: 15.2.1.1_A1_T4
description: Creating Object(undefined) and checking its properties
---*/
var __obj = Object(undefined);

var n__obj = new Object(undefined);

if (__obj.toString() !== n__obj.toString()) {
  $ERROR('#1');
}

if (__obj.constructor !== n__obj.constructor) {
  $ERROR('#2');
}

if (__obj.prototype !== n__obj.prototype) {
  $ERROR('#3');
}

if (__obj.toLocaleString() !== n__obj.toLocaleString()) {
  $ERROR('#4');
}

if (_typeof(__obj) !== _typeof(n__obj)) {
  $ERROR('#5');
}