var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.forEach
description: Array.prototype.forEach applied to boolean primitive
---*/
assert.sameValue(Array.prototype.forEach.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), undefined, 'Array.prototype.forEach.call(true, () => {}) must return undefined');
assert.sameValue(Array.prototype.forEach.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), undefined, 'Array.prototype.forEach.call(false, () => {}) must return undefined');