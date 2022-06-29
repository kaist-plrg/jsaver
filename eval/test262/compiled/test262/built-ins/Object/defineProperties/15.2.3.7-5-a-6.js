function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-a-6
description: >
    Object.defineProperties - enumerable own accessor property of
    'Properties' without a get function that overrides enumerable
    inherited accessor property of 'Properties' is defined in 'O'
---*/
var obj = {};
var proto = {};
Object.defineProperty(proto, "prop", {
  get: function get() {
    return 12;
  },
  enumerable: true
});

var Con = function Con() {};

Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "prop", {
  get: function get() {
    return {
      set: function set() {}
    };
  },
  enumerable: true
});
Object.defineProperties(obj, child);
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(_typeof(obj.prop), "undefined", 'typeof obj.prop');