function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weakmap.prototype.delete
description: >
  WeakMap.prototype.delete property descriptor
info: |
  WeakMap.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(WeakMap.prototype["delete"]), 'function', 'typeof WeakMap.prototype.delete is "function"');
verifyNotEnumerable(WeakMap.prototype, 'delete');
verifyWritable(WeakMap.prototype, 'delete');
verifyConfigurable(WeakMap.prototype, 'delete');