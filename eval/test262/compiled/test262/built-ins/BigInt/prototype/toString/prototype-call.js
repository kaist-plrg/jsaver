function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: Direct toString on BigInt prototype
info: |
  BigInt.prototype.toString ( [ radix ] )

  Let x be ? thisBigIntValue(this value).

  Properties of the BigInt Prototype Object

  The BigInt prototype is not a BigInt object; it does not have a
  [[BigIntData]] internal slot.
features: [BigInt]
---*/
assert.sameValue(typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt), 'function');
assert["throws"](TypeError, function () {
  BigInt.prototype.toString(1);
});