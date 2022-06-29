var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arrow-function-definitions-runtime-semantics-evaluation
description: Assignment of function `name` attribute
info: |
    ArrowFunction : ArrowParameters => ConciseBody 

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let parameters be CoveredFormalsList of ArrowParameters.
    3. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, "").
    ...
    5. Return closure.
includes: [propertyHelper.js]
---*/
verifyProperty(function (x) {
  _newArrowCheck(this, _this);
}.bind(this), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty(function () {
  _newArrowCheck(this, _this);
}.bind(this), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});