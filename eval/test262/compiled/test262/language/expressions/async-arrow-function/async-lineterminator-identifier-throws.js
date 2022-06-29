function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-AsyncArrowFunction
description: >
  async arrows cannot have a line terminator between "async" and the AsyncArrowBindingIdentifier
info: |
  14.7 Async Arrow Function Definitions

  AsyncArrowFunction:
    async [no LineTerminator here] AsyncArrowBindingIdentifier [no LineTerminator here] => AsyncConciseBody
    [...]
---*/
assert["throws"](ReferenceError, function () {
  var _this = this;

  async;
  (function (identifier) {
    _newArrowCheck(this, _this);
  }).bind(this);
});