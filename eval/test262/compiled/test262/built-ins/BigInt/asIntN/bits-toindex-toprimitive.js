var _BigInt$asIntN, _BigInt$asIntN2, _BigInt$asIntN3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt.asIntN type coercion for bits parameter
esid: pending
info: |
  BigInt.asIntN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, computed-property-names, Symbol, Symbol.toPrimitive]
---*/
assert.sameValue(typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt), 'function');
assert.sameValue(_typeof(BigInt.asIntN), 'function');

function err() {
  throw new Test262Error();
}

function MyError() {}

assert.sameValue(BigInt.asIntN((_BigInt$asIntN = {}, _defineProperty(_BigInt$asIntN, Symbol.toPrimitive, function () {
  return 1;
}), _defineProperty(_BigInt$asIntN, "valueOf", err), _defineProperty(_BigInt$asIntN, "toString", err), _BigInt$asIntN), 1n), -1n, "ToPrimitive: @@toPrimitive takes precedence");
assert.sameValue(BigInt.asIntN({
  valueOf: function valueOf() {
    return 1;
  },
  toString: err
}, 1n), -1n, "ToPrimitive: valueOf takes precedence over toString");
assert.sameValue(BigInt.asIntN({
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: toString with no valueOf");
assert.sameValue(BigInt.asIntN((_BigInt$asIntN2 = {}, _defineProperty(_BigInt$asIntN2, Symbol.toPrimitive, undefined), _defineProperty(_BigInt$asIntN2, "valueOf", function valueOf() {
  return 1;
}), _BigInt$asIntN2), 1n), -1n, "ToPrimitive: skip @@toPrimitive when it's undefined");
assert.sameValue(BigInt.asIntN((_BigInt$asIntN3 = {}, _defineProperty(_BigInt$asIntN3, Symbol.toPrimitive, null), _defineProperty(_BigInt$asIntN3, "valueOf", function valueOf() {
  return 1;
}), _BigInt$asIntN3), 1n), -1n, "ToPrimitive: skip @@toPrimitive when it's null");
assert.sameValue(BigInt.asIntN({
  valueOf: null,
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN({
  valueOf: 1,
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN({
  valueOf: {},
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN({
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: skip valueOf when it returns an object");
assert.sameValue(BigInt.asIntN({
  valueOf: function valueOf() {
    return Object(12345);
  },
  toString: function toString() {
    return 1;
  }
}, 1n), -1n, "ToPrimitive: skip valueOf when it returns an object");
assert["throws"](TypeError, function () {
  BigInt.asIntN(_defineProperty({}, Symbol.toPrimitive, 1), 0n);
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert["throws"](TypeError, function () {
  BigInt.asIntN(_defineProperty({}, Symbol.toPrimitive, {}), 0n);
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert["throws"](TypeError, function () {
  BigInt.asIntN(_defineProperty({}, Symbol.toPrimitive, function () {
    return Object(1);
  }), 0n);
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert["throws"](TypeError, function () {
  BigInt.asIntN(_defineProperty({}, Symbol.toPrimitive, function () {
    return {};
  }), 0n);
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert["throws"](MyError, function () {
  BigInt.asIntN(_defineProperty({}, Symbol.toPrimitive, function () {
    throw new MyError();
  }), 0n);
}, "ToPrimitive: propagate errors from @@toPrimitive");
assert["throws"](MyError, function () {
  BigInt.asIntN({
    valueOf: function valueOf() {
      throw new MyError();
    }
  }, 0n);
}, "ToPrimitive: propagate errors from valueOf");
assert["throws"](MyError, function () {
  BigInt.asIntN({
    toString: function toString() {
      throw new MyError();
    }
  }, 0n);
}, "ToPrimitive: propagate errors from toString");
assert["throws"](TypeError, function () {
  BigInt.asIntN({
    valueOf: null,
    toString: null
  }, 0n);
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asIntN({
    valueOf: 1,
    toString: 1
  }, 0n);
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asIntN({
    valueOf: {},
    toString: {}
  }, 0n);
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asIntN({
    valueOf: function valueOf() {
      return Object(1);
    },
    toString: function toString() {
      return Object(1);
    }
  }, 0n);
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asIntN({
    valueOf: function valueOf() {
      return {};
    },
    toString: function toString() {
      return {};
    }
  }, 0n);
}, "ToPrimitive: throw when skipping both valueOf and toString");