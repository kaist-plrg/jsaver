function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-531-6
description: >
    ES5 Attributes - Updating an indexed accessor property 'P' without
    [[Set]] using simple assignment is failed, 'A' is an Array object
    (8.12.5 step 5.b)
includes: [propertyHelper.js]
---*/
var obj = [];
var verifySetFunc = "data";

var getFunc = function getFunc() {
  return verifySetFunc;
};

Object.defineProperty(obj, "0", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
verifyNotWritable(obj, "0");
assert(obj.hasOwnProperty("0"));
var desc = Object.getOwnPropertyDescriptor(obj, "0");
assert.sameValue(_typeof(desc.set), "undefined");