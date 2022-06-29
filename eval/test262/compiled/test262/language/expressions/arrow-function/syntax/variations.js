var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2
description: >
    Syntax variations of valid Arrow Functions
---*/
assert.sameValue(function () {
  _newArrowCheck(this, _this);

  return 1;
}.bind(this)(), 1);
assert.sameValue(function (a) {
  _newArrowCheck(this, _this);

  return a + 1;
}.bind(this)(1), 2);
assert.sameValue(function () {
  _newArrowCheck(this, _this);

  return 3;
}.bind(this)(), 3);
assert.sameValue(function (a) {
  _newArrowCheck(this, _this);

  return a + 3;
}.bind(this)(1), 4);
assert.sameValue(function (a, b) {
  _newArrowCheck(this, _this);

  return a + b;
}.bind(this)(1, 4), 5);
assert.sameValue(function (a, b) {
  _newArrowCheck(this, _this);

  return a + b;
}.bind(this)(1, 5), 6);