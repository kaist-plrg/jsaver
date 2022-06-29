function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2018 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-async-arrow-function-definitions
description: >
  Escaped "async" followed by a line-terminator is not misinterpreted as an AsyncArrowFunction.
info: |
  14.7 Async Function Definitions

  async [no LineTerminator here] AsyncArrowBindingIdentifier[?Yield] [no LineTerminator here] => AsyncConciseBody[?In]

  5.1.5 Grammar Notation

  Terminal symbols are shown
  in fixed width font, both in the productions of the grammars and throughout this
  specification whenever the text directly refers to such a terminal symbol. These
  are to appear in a script exactly as written. All terminal symbol code points
  specified in this way are to be understood as the appropriate Unicode code points
  from the Basic Latin range, as opposed to any similar-looking code points from
  other Unicode ranges.
features: [async-functions]
---*/
// Throws ReferenceError because reference for "async" cannot be resolved.
assert["throws"](ReferenceError, function () {
  var _this = this;

  async;
  (function (p) {
    _newArrowCheck(this, _this);
  }).bind(this);
});