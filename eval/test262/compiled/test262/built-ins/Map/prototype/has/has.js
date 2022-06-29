function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 23.1.3.7
description: >
  Property type and descriptor.
info: |
  Map.prototype.has ( key )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(Map.prototype.has), 'function', '`typeof Map.prototype.has` is `function`');
verifyNotEnumerable(Map.prototype, 'has');
verifyWritable(Map.prototype, 'has');
verifyConfigurable(Map.prototype, 'has');