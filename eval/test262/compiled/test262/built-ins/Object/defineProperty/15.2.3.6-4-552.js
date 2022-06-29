function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-552
description: >
    ES5 Attributes - success to update [[Get]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
---*/
var obj = {};

var getFunc = function getFunc() {
  return 1001;
};

var verifySetFunc = "data";

var setFunc = function setFunc(value) {
  verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: setFunc,
  enumerable: false,
  configurable: true
});
var result1 = obj.prop === 1001;
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  get: undefined
});
var result2 = typeof obj.prop === "undefined";
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert(result1, 'result1 !== true');
assert(result2, 'result2 !== true');
assert.sameValue(desc1.get, getFunc, 'desc1.get');
assert.sameValue(_typeof(desc2.get), "undefined", 'typeof desc2.get');