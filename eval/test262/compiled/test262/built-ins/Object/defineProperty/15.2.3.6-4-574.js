function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-574
description: >
    ES5 Attributes - [[Set]] attribute is a function which has two
    arguments
---*/
var obj = {};
var firstArg = 12;
var secondArg = 12;

var setFunc = function setFunc(a, b) {
  firstArg = a;
  secondArg = b;
};

Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = 100;
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(desc.set, setFunc, 'desc.set');
assert.sameValue(firstArg, 100, 'firstArg');
assert.sameValue(_typeof(secondArg), "undefined", 'typeof secondArg');