function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-252
description: >
    Object.defineProperties - value of 'set' property of 'descObj' is
    undefined (8.10.5 step 8.b)
---*/
var getFun = function getFun() {
  return 11;
};

var obj = {};
Object.defineProperties(obj, {
  prop: {
    get: getFun,
    set: undefined
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(_typeof(desc.set), "undefined", 'typeof (desc.set)');