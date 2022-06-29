function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-192
description: >
    Object.defineProperties - 'get' property of 'descObj' is not
    present (8.10.5 step 7)
---*/
var obj = {};

var setter = function setter() {};

Object.defineProperties(obj, {
  property: {
    set: setter
  }
});
assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(_typeof(obj.property), "undefined", 'typeof (obj.property)');