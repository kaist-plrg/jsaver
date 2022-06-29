function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-394
description: ES5 Attributes - [[Value]] attribute of data property is undefined
---*/
var obj = {};
Object.defineProperty(obj, "prop", {
  value: undefined
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(_typeof(obj.prop), "undefined", 'typeof obj.prop');
assert.sameValue(_typeof(desc.value), "undefined", 'typeof desc.value');