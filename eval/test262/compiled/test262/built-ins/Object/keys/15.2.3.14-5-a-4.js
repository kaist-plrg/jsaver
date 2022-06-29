function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-a-4
description: >
    Object.keys - Verify that 'configurable' attribute of element of
    returned array is correct
---*/
var obj = {
  prop1: 100
};
var array = Object.keys(obj);
var desc = Object.getOwnPropertyDescriptor(array, "0");
delete array[0];
assert.sameValue(_typeof(array[0]), "undefined", 'typeof array[0]');
assert(desc.hasOwnProperty("configurable"), 'desc.hasOwnProperty("configurable") !== true');
assert.sameValue(desc.configurable, true, 'desc.configurable');