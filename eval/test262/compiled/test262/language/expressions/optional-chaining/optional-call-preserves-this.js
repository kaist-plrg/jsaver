var _a$b, _a$b2, _a$b3, _a$b4;

// Copyright (C) 2019 Sony Interactive Entertainment Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-optional-chaining-chain-evaluation
description: >
  optional call must preserve this context, as with a non-optional call
info: |
  OptionalChain : ?. Arguments
    1. Let thisChain be this OptionalChain.
    2. Let tailCall be IsInTailPosition(thisChain).
    3. Return ? EvaluateCall(baseValue, baseReference, Arguments, tailCall).
features: [optional-chaining]
---*/
var a = {
  b: function b() {
    return this._b;
  },
  _b: {
    c: 42
  }
};
assert.sameValue(a === null || a === void 0 ? void 0 : a.b().c, 42);
assert.sameValue((a === null || a === void 0 ? void 0 : a.b.bind(a))().c, 42);
assert.sameValue((_a$b = a.b) === null || _a$b === void 0 ? void 0 : _a$b.call(a).c, 42);
assert.sameValue((_a$b2 = a.b) === null || _a$b2 === void 0 ? void 0 : _a$b2.call(a).c, 42);
assert.sameValue(a === null || a === void 0 ? void 0 : (_a$b3 = a.b) === null || _a$b3 === void 0 ? void 0 : _a$b3.call(a).c, 42);
assert.sameValue(a === null || a === void 0 ? void 0 : (_a$b4 = a.b) === null || _a$b4 === void 0 ? void 0 : _a$b4.call(a).c, 42);