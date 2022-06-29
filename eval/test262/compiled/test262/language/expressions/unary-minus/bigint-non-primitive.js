var _Symbol$toPrimitive$v;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Unary minus for BigInt object wrappers
esid: sec-unary-minus-operator-runtime-semantics-evaluation
info: |
  Runtime Semantics: Evaluation
  UnaryExpression : - UnaryExpression

  1. Let expr be the result of evaluating UnaryExpression.
  2. Let oldValue be ? ToNumeric(? GetValue(expr)).
  3. Let T be Type(oldValue).
  4. Return ? T::unaryMinus(oldValue).

features: [BigInt, Symbol.toPrimitive]
---*/
assert.sameValue(-Object(1n), -1n, 'The value of -Object(1n) is -1n');
assert.notSameValue(-Object(1n), 1n, 'The value of -Object(1n) is not 1n');
assert.notSameValue(-Object(1n), Object(-1n), 'The value of -Object(1n) is not Object(-1n)');
assert.sameValue(-Object(-1n), 1n, 'The value of -Object(-1n) is 1n');
assert.notSameValue(-Object(-1n), -1n, 'The value of -Object(-1n) is not -1n');
assert.notSameValue(-Object(-1n), Object(1n), 'The value of -Object(-1n) is not Object(1n)');
assert.sameValue(-(_Symbol$toPrimitive$v = {}, _defineProperty(_Symbol$toPrimitive$v, Symbol.toPrimitive, function () {
  return 1n;
}), _defineProperty(_Symbol$toPrimitive$v, "valueOf", function valueOf() {
  $ERROR();
}), _defineProperty(_Symbol$toPrimitive$v, "toString", function toString() {
  $ERROR();
}), _Symbol$toPrimitive$v), -1n, 'The value of -{[Symbol.toPrimitive]: function() {return 1n;}, valueOf: function() {$ERROR();}, toString: function() {$ERROR();}} is -1n');
assert.sameValue(-{
  valueOf: function valueOf() {
    return 1n;
  },
  toString: function toString() {
    $ERROR();
  }
}, -1n, 'The value of -{valueOf: function() {return 1n;}, toString: function() {$ERROR();}} is -1n');
assert.sameValue(-{
  toString: function toString() {
    return 1n;
  }
}, -1n, 'The value of -{toString: function() {return 1n;}} is -1n');