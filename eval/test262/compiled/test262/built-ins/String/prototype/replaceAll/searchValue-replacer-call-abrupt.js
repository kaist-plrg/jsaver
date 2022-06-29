var _searchValue;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  Return abrupt completion from Call.call(poison, replacer, poison)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  1. Let O be RequireObjectCoercible(this value).
  2. If searchValue is neither undefined nor null, then
    a. Let isRegExp be ? IsRegExp(searchString).
    b. If isRegExp is true, then
      i. Let flags be ? Get(searchValue, "flags").
      ii. Perform ? RequireObjectCoercible(flags).
      iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
    c. Let replacer be ? GetMethod(searchValue, @@replace).
    d. If replacer is not undefined, then
      i. Return ? Call(replacer, searchValue, « O, replaceValue »).
  ...
features: [String.prototype.replaceAll, Symbol.match, Symbol.replace]
---*/
var poisoned = 0;
var poison = {
  toString: function toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = (_searchValue = {}, _defineProperty(_searchValue, Symbol.match, false), _defineProperty(_searchValue, "flags", 'g'), _defineProperty(_searchValue, Symbol.replace, function () {
  throw new Test262Error();
}), _defineProperty(_searchValue, "toString", function toString() {
  throw 'Should not call toString on searchValue';
}), _searchValue);
assert["throws"](Test262Error, function () {
  ''.replaceAll.call(poison, searchValue, poison);
});
assert.sameValue(poisoned, 0);