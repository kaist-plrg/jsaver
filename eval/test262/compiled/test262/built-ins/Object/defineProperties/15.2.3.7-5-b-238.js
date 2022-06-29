function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-238
description: >
    Object.defineProperties - 'set' property of 'descObj' is inherited
    accessor property without a get function (8.10.5 step 8.a)
---*/
var fun = function fun() {
  return 10;
};

var proto = {};
Object.defineProperty(proto, "set", {
  set: function set() {}
});

var Con = function Con() {};

Con.prototype = proto;
var descObj = new Con();
descObj.get = fun;
var obj = {};
Object.defineProperties(obj, {
  prop: descObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(_typeof(desc.set), "undefined", 'typeof (desc.set)');
assert.sameValue(obj.prop, 10, 'obj.prop');