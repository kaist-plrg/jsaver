function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-185
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is
    NaN  (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/
var obj = {};
Object.defineProperty(obj, "property", {
  writable: NaN
});
assert(obj.hasOwnProperty("property"));
verifyNotWritable(obj, "property");
assert.sameValue(_typeof(obj.property), "undefined");