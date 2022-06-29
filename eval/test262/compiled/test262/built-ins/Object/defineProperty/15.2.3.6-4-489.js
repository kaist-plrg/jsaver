function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-489
description: >
    ES5 Attributes - fail to update [[Get]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is false) to different
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
  get: undefined,
  set: setFunc,
  enumerable: false,
  configurable: false
});
var result1 = typeof obj.prop === "undefined";
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
assert["throws"](TypeError, function () {
  Object.defineProperty(obj, "prop", {
    get: getFunc
  });
});
var result2 = typeof obj.prop === "undefined";
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert(result1, 'result1 !== true');
assert(result2, 'result2 !== true');
assert.sameValue(_typeof(desc1.get), "undefined", 'typeof desc1.get');
assert.sameValue(_typeof(desc2.get), "undefined", 'typeof desc2.get');