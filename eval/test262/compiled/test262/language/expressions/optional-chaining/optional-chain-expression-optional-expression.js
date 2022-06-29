// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain bracket notation containing optional expresion
info: |
  OptionalChain:
    ?. [OptionalExpression]
features: [optional-chaining]
---*/
var a = undefined;
var b = {
  e: 0
};
var c = {};
c[undefined] = 11;
var d = [22];
assert.sameValue(undefined, a === null || a === void 0 ? void 0 : a[a === null || a === void 0 ? void 0 : a.b]);
assert.sameValue(11, c === null || c === void 0 ? void 0 : c[a === null || a === void 0 ? void 0 : a.b]);
assert.sameValue(22, d === null || d === void 0 ? void 0 : d[b === null || b === void 0 ? void 0 : b.e]);