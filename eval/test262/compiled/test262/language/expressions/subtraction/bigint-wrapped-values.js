function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: subtraction operator ToNumeric with BigInt operands
esid: sec-subtraction-operator-minus-runtime-semantics-evaluation
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/
assert.sameValue(Object(2n) - 1n, 1n, 'The result of (Object(2n) - 1n) is 1n');
assert.sameValue(3n - Object(2n), 1n, 'The result of (3n - Object(2n)) is 1n');
assert.sameValue(_defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}) - 1n, 1n, 'The result of (({[Symbol.toPrimitive]: function() {return 2n;}}) - 1n) is 1n');
assert.sameValue(3n - _defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}), 1n, 'The result of (3n - {[Symbol.toPrimitive]: function() {return 2n;}}) is 1n');
assert.sameValue({
  valueOf: function valueOf() {
    return 2n;
  }
} - 1n, 1n, 'The result of (({valueOf: function() {return 2n;}}) - 1n) is 1n');
assert.sameValue(3n - {
  valueOf: function valueOf() {
    return 2n;
  }
}, 1n, 'The result of (3n - {valueOf: function() {return 2n;}}) is 1n');
assert.sameValue({
  toString: function toString() {
    return 2n;
  }
} - 1n, 1n, 'The result of (({toString: function() {return 2n;}}) - 1n) is 1n');
assert.sameValue(3n - {
  toString: function toString() {
    return 2n;
  }
}, 1n, 'The result of (3n - {toString: function() {return 2n;}}) is 1n');