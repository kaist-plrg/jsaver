function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.valueof
description: >
  Throws a TypeError if this is an Object without a [[BigIntData]] internal.
info: |
  BigInt.prototype.valueOf ( )

  1. Return ? thisBigIntValue(this value).

  The abstract operation thisBigIntValue(value) performs the following steps:

  1. If Type(value) is BigInt, return value.
  2. If Type(value) is Object and value has a [[BigIntData]] internal slot, then
    ...
  3. Throw a TypeError exception.
features: [BigInt]
---*/
var valueOf = BigInt.prototype.valueOf;
assert.sameValue(_typeof(valueOf), 'function');
assert["throws"](TypeError, function () {
  valueOf.call({});
}, "{}");
assert["throws"](TypeError, function () {
  valueOf.call(Object(1));
}, "Object(1)");