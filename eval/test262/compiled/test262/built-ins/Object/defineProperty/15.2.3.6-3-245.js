function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-245
description: >
    Object.defineProperty - 'set' property in 'Attributes' is own
    accessor property without a get function (8.10.5 step 8.a)
includes: [propertyHelper.js]
---*/
var obj = {};
var attributes = {};
Object.defineProperty(attributes, "set", {
  set: function set() {}
});
Object.defineProperty(obj, "property", attributes);
verifyNotWritable(obj, "property");
var desc = Object.getOwnPropertyDescriptor(obj, "property");
assert(obj.hasOwnProperty("property"));
assert.sameValue(_typeof(obj.property), "undefined");
assert.sameValue(_typeof(desc.set), "undefined");