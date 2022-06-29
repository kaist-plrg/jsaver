function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-54
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Set]] of 'name' property of 'Attributes' is set as undefined
    value if absent in accessor descriptor 'desc' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/
var obj = {};
Object.defineProperty(obj, "property", {
  get: function get() {
    return "property";
  },
  enumerable: false,
  configurable: false
});
assert.sameValue(obj.property, "property");
var desc = Object.getOwnPropertyDescriptor(obj, "property");
assert.sameValue(_typeof(desc.set), "undefined");
verifyNotEnumerable(obj, "property");
verifyNotConfigurable(obj, "property");