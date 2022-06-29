function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.entries
description: >
  Property type and descriptor.
info: |
  22.1.3.4 Array.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(Array.prototype.entries), 'function', '`typeof Array.prototype.entries` is `function`');
verifyNotEnumerable(Array.prototype, 'entries');
verifyWritable(Array.prototype, 'entries');
verifyConfigurable(Array.prototype, 'entries');