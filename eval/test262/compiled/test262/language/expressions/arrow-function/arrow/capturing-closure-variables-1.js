function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Capturing closure variables
es6id: 14.2
---*/
var a;

function foo() {
  var _this = this;

  eval("a = 10");
  return function () {
    _newArrowCheck(this, _this);

    return a;
  }.bind(this);
}

assert.sameValue(foo()(), 10, "Closure variable was captured incorrectly.");