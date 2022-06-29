var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2019 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-error.prototype.tostring
description: >
  Error.prototype.toString throws if its receiver is not an object.
info: |
  Error.prototype.toString ( )
  1. Let O be this value.
  2. If Type(O) is not Object, throw a TypeError exception.
---*/
[undefined, null, 1, true, 'string', Symbol()].forEach(function (v) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  assert["throws"](TypeError, function () {
    _newArrowCheck(this, _this2);

    Error.prototype.toString.call(v);
  }.bind(this), "Error.prototype.toString.call(".concat(String(v), ")"));
}.bind(this));