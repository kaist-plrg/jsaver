var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: Array.prototype.map applied to boolean primitive
includes: [compareArray.js]
---*/
assert.compareArray(Array.prototype.map.call(true, function () {
  _newArrowCheck(this, _this);
}.bind(this)), [], 'Array.prototype.map.call(true, () => {}) must return []');
assert.compareArray(Array.prototype.map.call(false, function () {
  _newArrowCheck(this, _this);
}.bind(this)), [], 'Array.prototype.map.call(false, () => {}) must return []');