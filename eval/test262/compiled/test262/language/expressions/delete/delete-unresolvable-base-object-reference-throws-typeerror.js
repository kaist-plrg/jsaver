var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
  delete operations throws TypeError exception when base object is unresolvable reference.
---*/
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  delete Object[0][0];
}.bind(this));