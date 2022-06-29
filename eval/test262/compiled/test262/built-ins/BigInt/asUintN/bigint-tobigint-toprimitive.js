var _BigInt$asUintN, _BigInt$asUintN2, _BigInt$asUintN3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt.asUintN type coercion for bigint parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).
features: [BigInt, computed-property-names, Symbol, Symbol.toPrimitive]
---*/
assert.sameValue(typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt), 'function');
assert.sameValue(_typeof(BigInt.asUintN), 'function');

function err() {
  throw new Test262Error();
}

function MyError() {}

assert.sameValue(BigInt.asUintN(2, (_BigInt$asUintN = {}, _defineProperty(_BigInt$asUintN, Symbol.toPrimitive, function () {
  return "1";
}), _defineProperty(_BigInt$asUintN, "valueOf", err), _defineProperty(_BigInt$asUintN, "toString", err), _BigInt$asUintN)), 1n, "ToPrimitive: @@toPrimitive takes precedence");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function valueOf() {
    return "1";
  },
  toString: err
}), 1n, "ToPrimitive: valueOf takes precedence over toString");
assert.sameValue(BigInt.asUintN(2, {
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: toString with no valueOf");
assert.sameValue(BigInt.asUintN(2, (_BigInt$asUintN2 = {}, _defineProperty(_BigInt$asUintN2, Symbol.toPrimitive, undefined), _defineProperty(_BigInt$asUintN2, "valueOf", function valueOf() {
  return "1";
}), _BigInt$asUintN2)), 1n, "ToPrimitive: skip @@toPrimitive when it's undefined");
assert.sameValue(BigInt.asUintN(2, (_BigInt$asUintN3 = {}, _defineProperty(_BigInt$asUintN3, Symbol.toPrimitive, null), _defineProperty(_BigInt$asUintN3, "valueOf", function valueOf() {
  return "1";
}), _BigInt$asUintN3)), 1n, "ToPrimitive: skip @@toPrimitive when it's null");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: null,
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: 1,
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: {},
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it returns an object");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function valueOf() {
    return Object(12345);
  },
  toString: function toString() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it returns an object");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, _defineProperty({}, Symbol.toPrimitive, 1));
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, _defineProperty({}, Symbol.toPrimitive, {}));
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, _defineProperty({}, Symbol.toPrimitive, function () {
    return Object(1);
  }));
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, _defineProperty({}, Symbol.toPrimitive, function () {
    return {};
  }));
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert["throws"](MyError, function () {
  BigInt.asUintN(0, _defineProperty({}, Symbol.toPrimitive, function () {
    throw new MyError();
  }));
}, "ToPrimitive: propagate errors from @@toPrimitive");
assert["throws"](MyError, function () {
  BigInt.asUintN(0, {
    valueOf: function valueOf() {
      throw new MyError();
    }
  });
}, "ToPrimitive: propagate errors from valueOf");
assert["throws"](MyError, function () {
  BigInt.asUintN(0, {
    toString: function toString() {
      throw new MyError();
    }
  });
}, "ToPrimitive: propagate errors from toString");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, {
    valueOf: null,
    toString: null
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, {
    valueOf: 1,
    toString: 1
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, {
    valueOf: {},
    toString: {}
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, {
    valueOf: function valueOf() {
      return Object(1);
    },
    toString: function toString() {
      return Object(1);
    }
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert["throws"](TypeError, function () {
  BigInt.asUintN(0, {
    valueOf: function valueOf() {
      return {};
    },
    toString: function toString() {
      return {};
    }
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");