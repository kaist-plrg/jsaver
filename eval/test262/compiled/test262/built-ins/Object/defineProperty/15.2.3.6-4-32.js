function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-32
description: >
    Object.defineProperty - 'name' is an inherited accessor property
    without a get function (8.12.9 step 1)
---*/
var proto = {};
Object.defineProperty(proto, "foo", {
  set: function set() {},
  configurable: false
});

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "foo", {
  configurable: true
});
assert(obj.hasOwnProperty("foo"), 'obj.hasOwnProperty("foo") !== true');
assert.sameValue(_typeof(obj.foo), "undefined", 'typeof obj.foo');