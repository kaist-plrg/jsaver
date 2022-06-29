var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Sony Interactive Entertainment Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.shift
description: >
  Array#shift throws TypeError if this value's "length" property was defined with [[Writable]]: false.
info: |
  Array.prototype.shift ( )
  ...
  3. If len is zero, then
    a. Perform ? Set(O, "length", 0, true).
    ...
  8. Perform ? Set(O, "length", len - 1, true).

  Set ( O, P, V, Throw )
  ...
  4. Let success be ? O.[[Set]](P, V, O).
  5. If success is false and Throw is true, throw a TypeError exception.
---*/
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.shift.call('');
}.bind(this), "Array.prototype.shift.call('')");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.shift.call('abc');
}.bind(this), "Array.prototype.shift.call('abc')");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.shift.call(function () {});
}.bind(this), "Array.prototype.shift.call(function() {})");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.shift.call(Object.defineProperty({}, 'length', {
    writable: false
  }));
}.bind(this), "Array.prototype.shift.call(Object.defineProperty({}, 'length', {writable: false}))");