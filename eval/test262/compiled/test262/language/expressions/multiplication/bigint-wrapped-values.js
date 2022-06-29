function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: multiplication operator ToNumeric with BigInt operands
esid: sec-multiplicative-operators-runtime-semantics-evaluation
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/
assert.sameValue(Object(2n) * 2n, 4n, 'The result of (Object(2n) * 2n) is 4n');
assert.sameValue(2n * Object(2n), 4n, 'The result of (2n * Object(2n)) is 4n');
assert.sameValue(_defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}) * 2n, 4n, 'The result of (({[Symbol.toPrimitive]: function() {return 2n;}}) * 2n) is 4n');
assert.sameValue(2n * _defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}), 4n, 'The result of (2n * {[Symbol.toPrimitive]: function() {return 2n;}}) is 4n');
assert.sameValue({
  valueOf: function valueOf() {
    return 2n;
  }
} * 2n, 4n, 'The result of (({valueOf: function() {return 2n;}}) * 2n) is 4n');
assert.sameValue(2n * {
  valueOf: function valueOf() {
    return 2n;
  }
}, 4n, 'The result of (2n * {valueOf: function() {return 2n;}}) is 4n');
assert.sameValue({
  toString: function toString() {
    return 2n;
  }
} * 2n, 4n, 'The result of (({toString: function() {return 2n;}}) * 2n) is 4n');
assert.sameValue(2n * {
  toString: function toString() {
    return 2n;
  }
}, 4n, 'The result of (2n * {toString: function() {return 2n;}}) is 4n');