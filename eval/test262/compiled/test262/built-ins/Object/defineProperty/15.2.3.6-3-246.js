function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-246
description: >
    Object.defineProperty - 'set' property in 'Attributes' is own
    accessor property(without a get function) that overrides an
    inherited accessor property (8.10.5 step 8.a)
includes: [propertyHelper.js]
---*/
var obj = {};
var proto = {};
var data = "data";
Object.defineProperty(proto, "set", {
  get: function get() {
    return function (value) {
      data = value;
    };
  }
});

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "set", {
  set: function set() {}
});
Object.defineProperty(obj, "property", child);
verifyNotWritable(obj, "property");
assert.sameValue(_typeof(obj.property), "undefined");
assert.sameValue(data, "data");
assert(obj.hasOwnProperty("property"));