var _Symbol$toPrimitive$v;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Bitwise NOT for BigInt object wrappers
esid: sec-bitwise-not-operator-runtime-semantics-evaluation
info: |
  Runtime Semantics: Evaluation
  UnaryExpression : ~ UnaryExpression

  1. Let expr be the result of evaluating UnaryExpression.
  2. Let oldValue be ? ToNumeric(? GetValue(expr)).
  3. Let T be Type(oldValue).
  4. Return ? T::bitwiseNOT(oldValue).

features: [BigInt, Symbol.toPrimitive]
---*/
assert.sameValue(~Object(1n), -2n, 'The value of ~Object(1n) is -2n');

function err() {
  throw new Test262Error();
}

assert.sameValue(~(_Symbol$toPrimitive$v = {}, _defineProperty(_Symbol$toPrimitive$v, Symbol.toPrimitive, function () {
  return 1n;
}), _defineProperty(_Symbol$toPrimitive$v, "valueOf", err), _defineProperty(_Symbol$toPrimitive$v, "toString", err), _Symbol$toPrimitive$v), -2n, 'The value of ~{[Symbol.toPrimitive]: function() {return 1n;}, valueOf: err, toString: err} is -2n');
assert.sameValue(~{
  valueOf: function valueOf() {
    return 1n;
  },
  toString: err
}, -2n, 'The value of ~{valueOf: function() {return 1n;}, toString: err} is -2n');
assert.sameValue(~{
  toString: function toString() {
    return 1n;
  }
}, -2n, 'The value of ~{toString: function() {return 1n;}} is -2n');