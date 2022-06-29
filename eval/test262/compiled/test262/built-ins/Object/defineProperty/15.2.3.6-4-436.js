function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-436
description: >
    ES5 Attributes - fail to update [[Set]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
---*/
var obj = {};
var verifySetFunc = "data";

var setFunc = function setFunc(value) {
  verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: true,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
assert["throws"](TypeError, function () {
  Object.defineProperty(obj, "prop", {
    set: setFunc
  });
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert.sameValue(_typeof(desc1.set), "undefined", 'typeof desc1.set');
assert.sameValue(_typeof(desc2.set), "undefined", 'typeof desc2.set');