var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to boolean primitive
---*/
assert.sameValue(Array.prototype.some.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), false, 'Array.prototype.some.call(true, () => {}) must return false');
assert.sameValue(Array.prototype.some.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), false, 'Array.prototype.some.call(false, () => {}) must return false');