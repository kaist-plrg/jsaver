function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 23.1.3.10
description: >
  Property type and descriptor.
info: |
  get Map.prototype.size

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/
var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');
assert.sameValue(_typeof(descriptor.get), 'function', 'typeof descriptor.get is function');
assert.sameValue(_typeof(descriptor.set), 'undefined', 'typeof descriptor.set is undefined');
verifyNotEnumerable(Map.prototype, 'size');
verifyConfigurable(Map.prototype, 'size');