var _ref;

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  accessing optional value on undefined or null returns undefined.
info: |
  If baseValue is undefined or null, then
    Return undefined.
features: [optional-chaining]
---*/
var nul = null;
var undf = undefined;
assert.sameValue(undefined, nul === null || nul === void 0 ? void 0 : nul.a);
assert.sameValue(undefined, undf === null || undf === void 0 ? void 0 : undf.b);
assert.sameValue(undefined, (_ref = null) === null || _ref === void 0 ? void 0 : _ref.a);
assert.sameValue(undefined, undefined === null || undefined === void 0 ? void 0 : undefined.b);