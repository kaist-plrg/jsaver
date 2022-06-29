function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-3-6
description: >
    Object.getOwnPropertyDescriptor - 'P' is inherited accessor
    property
---*/
var proto = {};

var fun = function fun() {
  return "ownAccessorProperty";
};

Object.defineProperty(proto, "property", {
  get: fun,
  configurable: true
});

var Con = function Con() {};

Con.prototype = proto;
var child = new Con();
var desc = Object.getOwnPropertyDescriptor(child, "property");
assert.sameValue(_typeof(desc), "undefined", 'typeof desc');