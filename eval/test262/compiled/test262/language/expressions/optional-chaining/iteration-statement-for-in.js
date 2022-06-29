// Copyright 2019 Google, LLC.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain in test portion of do while statement
info: |
  IterationStatement
    for (LeftHandSideExpression in Expression) Statement
features: [optional-chaining]
---*/
var obj = {
  inner: {
    a: 1,
    b: 2
  }
};
var str = '';

for (var key in obj === null || obj === void 0 ? void 0 : obj.inner) {
  str += key;
}

assert.sameValue('ab', str);