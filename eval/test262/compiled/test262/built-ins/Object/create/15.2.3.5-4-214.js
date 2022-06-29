function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-214
description: >
    Object.create - 'writable' property of one property in
    'Properties' is an empty string (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/
var descObj = {
  writable: ""
};
var newObj = Object.create({}, {
  prop: descObj
});
assert(newObj.hasOwnProperty("prop"));
assert.sameValue(_typeof(newObj.prop), "undefined");
verifyNotWritable(newObj, "prop");