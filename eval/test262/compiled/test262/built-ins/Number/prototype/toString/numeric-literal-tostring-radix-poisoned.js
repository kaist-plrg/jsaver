var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tostring
description: >
  Else, let radixNumber be ? ToInteger(radix).
---*/
var poisoned = {
  valueOf: function valueOf() {
    throw new Test262Error();
  }
};
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  0..toString(poisoned);
}.bind(this));
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  1..toString(poisoned);
}.bind(this));
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  NaN.toString(poisoned);
}.bind(this));
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  Infinity.toString(poisoned);
}.bind(this));