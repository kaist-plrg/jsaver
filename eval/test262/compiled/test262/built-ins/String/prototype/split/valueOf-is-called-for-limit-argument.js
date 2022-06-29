var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.split
description: >
  Calls valueOf() of limit argument
info: |
  String.prototype.split(separator, limit):

  If limit is undefined, let lim be 232 - 1; else let lim be ℝ(? ToUint32(limit)).
features: [arrow-function]
---*/
var limit = {
  toString: function toString() {},
  valueOf: function valueOf() {
    throw new Test262Error();
  }
};
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  "".split("", limit);
}.bind(this));