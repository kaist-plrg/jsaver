var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array-exotic-objects-defineownproperty-p-desc
description: >
  Redefining "length" to `configurable: true` throws a TypeError exception
info: |
  ArraySetLength ( A, Desc )

  ValidateAndApplyPropertyDescriptor ( O, P, extensible, Desc, current )
---*/
var a = [1];
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Object.defineProperty(a, "length", {
    configurable: true
  });
}.bind(this));
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Object.defineProperty(a, "length", {
    value: 1,
    configurable: true
  });
}.bind(this));
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Object.defineProperty(a, "length", {
    value: 2,
    configurable: true
  });
}.bind(this));
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Object.defineProperty(a, "length", {
    value: 3,
    configurable: true
  });
}.bind(this));