function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: modulus operator ToNumeric with BigInt operands
esid: sec-multiplicative-operators-runtime-semantics-evaluation
features: [BigInt, Symbol, Symbol.toPrimitive, computed-property-names]
---*/
assert["throws"](TypeError, function () {
  Symbol('1') % 1n;
}, 'Symbol("1") % 1n throws TypeError');
assert["throws"](TypeError, function () {
  0n % Symbol('1');
}, '0n % Symbol("1") throws TypeError');
assert["throws"](TypeError, function () {
  Object(Symbol('1')) % 1n;
}, 'Object(Symbol("1")) % 1n throws TypeError');
assert["throws"](TypeError, function () {
  0n % Object(Symbol('1'));
}, '0n % Object(Symbol("1")) throws TypeError');
assert["throws"](TypeError, function () {
  _defineProperty({}, Symbol.toPrimitive, function () {
    return Symbol('1');
  }) % 1n;
}, '({[Symbol.toPrimitive]: function() {return Symbol("1");}}) % 1n throws TypeError');
assert["throws"](TypeError, function () {
  0n % _defineProperty({}, Symbol.toPrimitive, function () {
    return Symbol('1');
  });
}, '0n % {[Symbol.toPrimitive]: function() {return Symbol("1");}} throws TypeError');
assert["throws"](TypeError, function () {
  ({
    valueOf: function valueOf() {
      return Symbol('1');
    }
  }) % 1n;
}, '({valueOf: function() {return Symbol("1");}}) % 1n throws TypeError');
assert["throws"](TypeError, function () {
  0n % {
    valueOf: function valueOf() {
      return Symbol('1');
    }
  };
}, '0n % {valueOf: function() {return Symbol("1");}} throws TypeError');
assert["throws"](TypeError, function () {
  ({
    toString: function toString() {
      return Symbol('1');
    }
  }) % 1n;
}, '({toString: function() {return Symbol("1");}}) % 1n throws TypeError');
assert["throws"](TypeError, function () {
  0n % {
    toString: function toString() {
      return Symbol('1');
    }
  };
}, '0n % {toString: function() {return Symbol("1");}} throws TypeError');