function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-531-7
description: >
    ES5 Attributes - Updating a named accessor property 'P' without
    [[Set]] using simple assignment is failed, 'O' is an Arguments
    object (8.12.5 step 5.b)
includes: [propertyHelper.js]
---*/
var obj = function () {
  return arguments;
}();

var verifySetFunc = "data";

var getFunc = function getFunc() {
  return verifySetFunc;
};

Object.defineProperty(obj, "prop", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
assert(obj.hasOwnProperty("prop"));
verifyNotWritable(obj, "prop");
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
assert.sameValue(_typeof(desc.set), "undefined");
assert.sameValue(obj.prop, "data");