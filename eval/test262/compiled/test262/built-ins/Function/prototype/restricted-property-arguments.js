function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Intrinsic %FunctionPrototype% has poisoned own property "arguments"
includes:
  - propertyHelper.js
es6id: 8.2.2 S12, 9.2.7
---*/
var FunctionPrototype = Function.prototype;
assert.sameValue(FunctionPrototype.hasOwnProperty('arguments'), true, 'The result of %FunctionPrototype%.hasOwnProperty("arguments") is true');
var descriptor = Object.getOwnPropertyDescriptor(FunctionPrototype, 'arguments');
assert.sameValue(_typeof(descriptor.get), 'function', '%FunctionPrototype%.arguments is an accessor property');
assert.sameValue(_typeof(descriptor.set), 'function', '%FunctionPrototype%.arguments is an accessor property');
assert.sameValue(descriptor.get, descriptor.set, '%FunctionPrototype%.arguments getter/setter are both %ThrowTypeError%');
assert["throws"](TypeError, function () {
  return FunctionPrototype.arguments;
});
assert["throws"](TypeError, function () {
  FunctionPrototype.arguments = {};
});
verifyNotEnumerable(FunctionPrototype, 'arguments');
verifyConfigurable(FunctionPrototype, 'arguments');