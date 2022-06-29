var _searchValue;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  Returns abrupt completions from ToString(flags)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  1. Let O be RequireObjectCoercible(this value).
  2. If searchValue is neither undefined nor null, then
    a. Let isRegExp be ? IsRegExp(searchString).
    b. If isRegExp is true, then
      i. Let flags be ? Get(searchValue, "flags").
      ii. Perform ? RequireObjectCoercible(flags).
      iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
  ...
features: [String.prototype.replaceAll, Symbol.match, Symbol]
---*/
assert.sameValue(_typeof(String.prototype.replaceAll), 'function', 'function must exist');
var poisoned = 0;
var poison = {
  toString: function toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = (_searchValue = {}, _defineProperty(_searchValue, Symbol.match, true), _defineProperty(_searchValue, "flags", Symbol()), _defineProperty(_searchValue, "toString", function toString() {
  throw 'Should not call toString on searchValue';
}), _searchValue);
assert["throws"](TypeError, function () {
  ''.replaceAll.call(poison, searchValue, poison);
}, 'Symbol');
searchValue.flags = {
  toString: function toString() {
    throw new Test262Error();
  }
};
assert["throws"](Test262Error, function () {
  ''.replaceAll.call(poison, searchValue, poison);
}, 'custom abrupt');
assert.sameValue(poisoned, 0);