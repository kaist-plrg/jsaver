function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.findindex
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(Array.prototype.findIndex), 'function', '`typeof Array.prototype.findIndex` is `function`');
verifyNotEnumerable(Array.prototype, 'findIndex');
verifyWritable(Array.prototype, 'findIndex');
verifyConfigurable(Array.prototype, 'findIndex');