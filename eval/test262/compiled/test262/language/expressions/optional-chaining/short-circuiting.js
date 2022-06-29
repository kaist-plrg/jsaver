// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  demonstrate syntax-based short-circuiting.
info: |
  If the expression on the LHS of ?. evaluates to null/undefined, the RHS is
  not evaluated
features: [optional-chaining]
---*/
var a = undefined;
var x = 1;
a === null || a === void 0 ? void 0 : a[++x]; // short-circuiting.

a === null || a === void 0 ? void 0 : a.b.c(++x).d; // long short-circuiting.

undefined === null || undefined === void 0 ? void 0 : undefined[++x]; // short-circuiting.

undefined === null || undefined === void 0 ? void 0 : undefined.b.c(++x).d; // long short-circuiting.

assert.sameValue(1, x);