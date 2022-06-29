var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.flatMap
description: Array.prototype.flatMap applied to boolean primitive
includes: [compareArray.js]
---*/
assert.compareArray(Array.prototype.flatMap.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), [], 'Array.prototype.flatMap.call(true, () => {}) must return []');
assert.compareArray(Array.prototype.flatMap.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), [], 'Array.prototype.flatMap.call(false, () => {}) must return []');