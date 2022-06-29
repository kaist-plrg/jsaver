function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-499
description: >
    ES5 Attributes - success to update [[Set]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is true) to different
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
  set: undefined,
  enumerable: true,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  set: setFunc
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
obj.prop = "overrideData";
assert.sameValue(_typeof(desc1.set), "undefined", 'typeof desc1.set');
assert.sameValue(desc2.set, setFunc, 'desc2.set');
assert.sameValue(verifySetFunc, "overrideData", 'verifySetFunc');