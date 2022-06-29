function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt.asUintN type coercion for bits parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, computed-property-names, Symbol, Symbol.toPrimitive]
---*/
assert.sameValue(typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt), 'function');
assert.sameValue(_typeof(BigInt.asUintN), 'function');
assert["throws"](RangeError, function () {
  BigInt.asUintN(-1, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert["throws"](RangeError, function () {
  BigInt.asUintN(-2.5, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert["throws"](RangeError, function () {
  BigInt.asUintN("-2.5", 0n);
}, "ToIndex: parse Number => throw when integerIndex < 0");
assert["throws"](RangeError, function () {
  BigInt.asUintN(-Infinity, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert["throws"](RangeError, function () {
  BigInt.asUintN(9007199254740992, 0n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert["throws"](RangeError, function () {
  BigInt.asUintN(Infinity, 0n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0n, 0n);
}, "ToIndex: BigInt => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN(Object(0n), 0n);
}, "ToIndex: unbox object with internal slot => BigInt => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN(_defineProperty({}, Symbol.toPrimitive, function () {
    return 0n;
  }), 0n);
}, "ToIndex: @@toPrimitive => BigInt => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN({
    valueOf: function valueOf() {
      return 0n;
    }
  }, 0n);
}, "ToIndex: valueOf => BigInt => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN({
    toString: function toString() {
      return 0n;
    }
  }, 0n);
}, "ToIndex: toString => BigInt => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN(Symbol("1"), 0n);
}, "ToIndex: Symbol => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN(Object(Symbol("1")), 0n);
}, "ToIndex: unbox object with internal slot => Symbol => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN(_defineProperty({}, Symbol.toPrimitive, function () {
    return Symbol("1");
  }), 0n);
}, "ToIndex: @@toPrimitive => Symbol => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN({
    valueOf: function valueOf() {
      return Symbol("1");
    }
  }, 0n);
}, "ToIndex: valueOf => Symbol => TypeError");
assert["throws"](TypeError, function () {
  BigInt.asUintN({
    toString: function toString() {
      return Symbol("1");
    }
  }, 0n);
}, "ToIndex: toString => Symbol => TypeError");