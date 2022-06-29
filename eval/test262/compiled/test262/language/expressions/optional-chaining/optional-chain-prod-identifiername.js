// Copyright 2020 Salesforce.com, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  Productions for ?. IdentifierName
info: |
  OptionalChain[Yield, Await]:
    ?. IdentifierName
features: [optional-chaining]
---*/
var arr = [10, 11];
var obj = {
  a: 'hello'
};
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.a, 'hello');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.a, 'hello');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.a, 'hello');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.b, undefined);
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.b, undefined);
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr.length, 2);
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr.length, 2);
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr.length, 2);
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.$, undefined);
obj.$ = 42;
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj.$, 42);
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj._, undefined);
obj._ = 39;
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj._, 39);