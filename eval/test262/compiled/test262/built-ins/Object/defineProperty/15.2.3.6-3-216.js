function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-216
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own
    accessor property(without a get function) that overrides an
    inherited accessor property (8.10.5 step 7.a)
---*/
var obj = {};
var proto = {};
Object.defineProperty(proto, "get", {
  get: function get() {
    return function () {
      return "inheritedAccessorProperty";
    };
  }
});

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "get", {
  set: function set() {}
});
Object.defineProperty(obj, "property", child);
assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(_typeof(obj.property), "undefined", 'typeof obj.property');