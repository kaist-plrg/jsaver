var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to boolean primitive
---*/
assert.sameValue(Array.prototype.every.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), true, 'Array.prototype.every.call(true, () => {}) must return true');
assert.sameValue(Array.prototype.every.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), true, 'Array.prototype.every.call(false, () => {}) must return true');