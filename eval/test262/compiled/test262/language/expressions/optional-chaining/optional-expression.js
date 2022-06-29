var _obj$a, _fn, _fn$a;

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain on recursive optional expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      OptionalExpression OptionalChain
features: [optional-chaining]
---*/
var obj = {
  a: {
    b: 22
  }
};

function fn() {
  return {};
} // OptionalExpression (MemberExpression OptionalChain) OptionalChain


assert.sameValue(22, obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b); // OptionalExpression (CallExpression OptionalChain) OptionalChain

assert.sameValue(undefined, (_fn = fn()) === null || _fn === void 0 ? void 0 : (_fn$a = _fn.a) === null || _fn$a === void 0 ? void 0 : _fn$a.b);