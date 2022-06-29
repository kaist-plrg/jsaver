function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-124
description: >
    Object.defineProperties - 'value' property of 'descObj' is
    inherited accessor property without a get function (8.10.5 step
    5.a)
---*/
var obj = {};
var proto = {};
Object.defineProperty(proto, "value", {
  set: function set() {}
});

var Con = function Con() {};

Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});
assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(_typeof(obj.property), "undefined", 'typeof (obj.property)');