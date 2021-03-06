function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: addition operator ToNumeric with BigInt operands
esid: sec-addition-operator-plus-runtime-semantics-evaluation
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/
assert.sameValue(Object(2n) + 1n, 3n, 'The result of (Object(2n) + 1n) is 3n');
assert.sameValue(1n + Object(2n), 3n, 'The result of (1n + Object(2n)) is 3n');
assert.sameValue(_defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}) + 1n, 3n, 'The result of (({[Symbol.toPrimitive]: function() {return 2n;}}) + 1n) is 3n');
assert.sameValue(1n + _defineProperty({}, Symbol.toPrimitive, function () {
  return 2n;
}), 3n, 'The result of (1n + {[Symbol.toPrimitive]: function() {return 2n;}}) is 3n');
assert.sameValue({
  valueOf: function valueOf() {
    return 2n;
  }
} + 1n, 3n, 'The result of (({valueOf: function() {return 2n;}}) + 1n) is 3n');
assert.sameValue(1n + {
  valueOf: function valueOf() {
    return 2n;
  }
}, 3n, 'The result of (1n + {valueOf: function() {return 2n;}}) is 3n');
assert.sameValue({
  toString: function toString() {
    return 2n;
  }
} + 1n, 3n, 'The result of (({toString: function() {return 2n;}}) + 1n) is 3n');
assert.sameValue(1n + {
  toString: function toString() {
    return 2n;
  }
}, 3n, 'The result of (1n + {toString: function() {return 2n;}}) is 3n');