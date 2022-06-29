var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2
description: >
    Arrow functions are like functions, except they throw when using the
    "new" operator on them.
---*/
assert.sameValue(_typeof(function () {
  _newArrowCheck(this, _this);
}.bind(this)), "function");
assert.sameValue(Object.getPrototypeOf(function () {
  _newArrowCheck(this, _this);
}.bind(this)), Function.prototype);
assert.sameValue("prototype" in function () {
  _newArrowCheck(this, _this);
}.bind(this), false);