function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-381
description: >
    ES5 Attributes - fail to update the data property ([[Writable]] is
    false, [[Enumerable]] is false, [[Configurable]] is false) to an
    accessor property
---*/
var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: false,
  configurable: false
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

function getFunc() {
  return 20;
}

assert["throws"](TypeError, function () {
  Object.defineProperty(obj, "prop", {
    get: getFunc
  });
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc1.value, 2010, 'desc1.value');
assert.sameValue(obj.prop, 2010, 'obj.prop');
assert.sameValue(_typeof(desc2.get), "undefined", 'typeof desc2.get');