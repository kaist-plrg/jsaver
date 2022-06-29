function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-76
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    an inherited data property (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/
var obj = {};
var proto = {
  configurable: false
};

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);
assert(obj.hasOwnProperty("property"));
verifyNotConfigurable(obj, "property");
assert(obj.hasOwnProperty("property"));
assert.sameValue(_typeof(obj.property), "undefined");