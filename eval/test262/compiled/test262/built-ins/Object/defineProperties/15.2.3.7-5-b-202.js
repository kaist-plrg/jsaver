function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-202
description: >
    Object.defineProperties - 'get' property of 'descObj' is own
    accessor property without a get function that overrides an
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

var Con = function Con() {};

Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "get", {
  set: function set() {}
});
Object.defineProperties(obj, {
  property: descObj
});
assert.sameValue(_typeof(obj.property), "undefined", 'typeof (obj.property)');