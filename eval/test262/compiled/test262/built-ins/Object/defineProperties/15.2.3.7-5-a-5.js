function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-a-5
description: >
    Object.defineProperties - enumerable own accessor property of
    'Properties' without a get function is defined in 'O'
---*/
var obj = {};
var props = {};
Object.defineProperty(props, "prop", {
  get: function get() {
    return {
      set: function set() {}
    };
  },
  enumerable: true
});
Object.defineProperties(obj, props);
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(_typeof(obj.prop), "undefined", 'typeof obj.prop');