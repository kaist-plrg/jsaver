// Copyright (C) 2021 Stuart Cook. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-in-and-for-of-statements
description: >
  The left-hand-side of a for-of loop may be the identifier `async` written
  with an escape sequence.
info: |
  ForInOfStatement[Yield, Await, Return] :
    for ( [lookahead ∉ { let, async of }] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
---*/
var async;

for (var _i = 0, _arr = [7]; _i < _arr.length; _i++) {
  async = _arr[_i];
}

assert.sameValue(async, 7);