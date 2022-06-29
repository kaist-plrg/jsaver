function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: exponentiation operator ToNumeric with BigInt operands
esid: sec-exp-operator-runtime-semantics-evaluation
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/
assert.sameValue(Math.pow(Object(2n), 1n), 2n, 'The result of (Object(2n) ** 1n) is 2n');
assert.sameValue(Math.pow(1n, Object(2n)), 1n, 'The result of (1n ** Object(2n)) is 1n');
assert.sameValue(Math.pow(_defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}), 1n), 2n, 'The result of (({[Symbol.toPrimitive]: function() {return 2n;}}) ** 1n) is 2n');
assert.sameValue(Math.pow(1n, _defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
})), 1n, 'The result of (1n ** {[Symbol.toPrimitive]: function() {return 2n;}}) is 1n');
assert.sameValue(Math.pow({
  valueOf: function valueOf() {
    return 2n;
  }
}, 1n), 2n, 'The result of (({valueOf: function() {return 2n;}}) ** 1n) is 2n');
assert.sameValue(Math.pow(1n, {
  valueOf: function valueOf() {
    return 2n;
  }
}), 1n, 'The result of (1n ** {valueOf: function() {return 2n;}}) is 1n');
assert.sameValue(Math.pow({
  toString: function toString() {
    return 2n;
  }
}, 1n), 2n, 'The result of (({toString: function() {return 2n;}}) ** 1n) is 2n');
assert.sameValue(Math.pow(1n, {
  toString: function toString() {
    return 2n;
  }
}), 1n, 'The result of (1n ** {toString: function() {return 2n;}}) is 1n');