var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2
description: >
    Parenthesize the body to return an object literal expression
---*/
var keyMaker = function keyMaker(val) {
  _newArrowCheck(this, _this);

  return {
    key: val
  };
}.bind(this);

assert.sameValue(keyMaker(1).key, 1);