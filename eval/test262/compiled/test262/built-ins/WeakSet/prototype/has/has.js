function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weakset.prototype.has
description: >
  WeakSet.prototype.has property descriptor
info: |
  WeakSet.prototype.has ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(WeakSet.prototype.has), 'function', 'typeof WeakSet.prototype.has is "function"');
verifyNotEnumerable(WeakSet.prototype, 'has');
verifyWritable(WeakSet.prototype, 'has');
verifyConfigurable(WeakSet.prototype, 'has');