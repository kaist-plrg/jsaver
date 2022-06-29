function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-9
description: >
    Function.prototype.bind - F can get own accessor property without
    a get function
---*/
var foo = function foo() {};

var obj = foo.bind({});
Object.defineProperty(obj, "property", {
  set: function set() {}
});
assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(_typeof(obj.property), "undefined", 'typeof (obj.property)');