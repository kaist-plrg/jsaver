var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tostring
description: >
  If radixNumber < 2 or radixNumber > 36, throw a RangeError exception.
---*/
assert["throws"](RangeError, function () {
  _newArrowCheck(this, _this);

  0..toString(1);
}.bind(this));
assert["throws"](RangeError, function () {
  _newArrowCheck(this, _this);

  1..toString(1);
}.bind(this));
assert["throws"](RangeError, function () {
  _newArrowCheck(this, _this);

  NaN.toString(1);
}.bind(this));
assert["throws"](RangeError, function () {
  _newArrowCheck(this, _this);

  Infinity.toString(1);
}.bind(this));