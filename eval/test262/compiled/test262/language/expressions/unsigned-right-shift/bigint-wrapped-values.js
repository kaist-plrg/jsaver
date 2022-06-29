function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: unsigned-right-shift operator ToNumeric with BigInt operands
esid: sec-unsigned-right-shift-operator-runtime-semantics-evaluation
info: After ToNumeric type coercion, unsigned-right-shift always throws for BigInt operands
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/
assert["throws"](TypeError, function () {
  Object(2n) >>> 0n;
}, 'Object(2n) >>> 0n throws TypeError');
assert["throws"](TypeError, function () {
  0n >>> Object(2n);
}, '0n >>> Object(2n) throws TypeError');
assert["throws"](TypeError, function () {
  _defineProperty({}, Symbol.toPrimitive, function () {
    return 2n;
  }) >>> 0n;
}, '({[Symbol.toPrimitive]: function() {return 2n;}}) >>> 0n throws TypeError');
assert["throws"](TypeError, function () {
  0n >>> _defineProperty({}, Symbol.toPrimitive, function () {
    return 2n;
  });
}, '0n >>> {[Symbol.toPrimitive]: function() {return 2n;}} throws TypeError');
assert["throws"](TypeError, function () {
  ({
    valueOf: function valueOf() {
      return 2n;
    }
  }) >>> 0n;
}, '({valueOf: function() {return 2n;}}) >>> 0n throws TypeError');
assert["throws"](TypeError, function () {
  0n >>> {
    valueOf: function valueOf() {
      return 2n;
    }
  };
}, '0n >>> {valueOf: function() {return 2n;}} throws TypeError');
assert["throws"](TypeError, function () {
  ({
    toString: function toString() {
      return 2n;
    }
  }) >>> 0n;
}, '({toString: function() {return 2n;}}) >>> 0n throws TypeError');
assert["throws"](TypeError, function () {
  0n >>> {
    toString: function toString() {
      return 2n;
    }
  };
}, '0n >>> {toString: function() {return 2n;}} throws TypeError');