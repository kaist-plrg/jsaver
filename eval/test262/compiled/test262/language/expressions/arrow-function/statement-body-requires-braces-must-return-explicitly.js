var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2
description: >
    Statement body needs braces, must use 'return' explicitly if not void
---*/
var plusOne = function plusOne(v) {
  _newArrowCheck(this, _this);

  return v + 1;
}.bind(this);

assert.sameValue(plusOne(1), 2);