function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.keys
description: >
  Property type and descriptor.
info: |
  22.1.3.13 Array.prototype.keys ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(Array.prototype.keys), 'function', '`typeof Array.prototype.keys` is `function`');
verifyNotEnumerable(Array.prototype, 'keys');
verifyWritable(Array.prototype, 'keys');
verifyConfigurable(Array.prototype, 'keys');