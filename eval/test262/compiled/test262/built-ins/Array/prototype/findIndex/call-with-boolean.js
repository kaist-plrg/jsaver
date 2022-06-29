var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.findIndex
description: Array.prototype.findIndex applied to boolean primitive
---*/
assert.sameValue(Array.prototype.findIndex.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), -1, 'Array.prototype.findIndex.call(true, () => {}) must return -1');
assert.sameValue(Array.prototype.findIndex.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), -1, 'Array.prototype.findIndex.call(false, () => {}) must return -1');