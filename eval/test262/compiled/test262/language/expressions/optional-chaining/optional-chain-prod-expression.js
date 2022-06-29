// Copyright 2020 Salesforce.com, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  Productions for ?. [Expression]
info: |
  OptionalChain:
    ?.[ Expression ]
features: [optional-chaining]
---*/
var $ = 'x';
var arr = [39, 42];
arr["true"] = 'prop';
arr[1.1] = 'other prop';
var obj = {
  a: 'hello',
  undefined: 40,
  $: 0,
  NaN: 41,
  "null": 42,
  x: 43,
  "true": 44
};
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[0], 39, '[0]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[(0, 1)], 42, '[0, 1]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[1], 42, '[1]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[(1, 0)], 39, '[1, 0]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[({}, NaN, undefined, 2, 0, 10 / 10)], 42, '[{}, NaN, undefined, 2, 0, 10 / 10]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[true], 'prop', '[true]');
assert.sameValue(arr === null || arr === void 0 ? void 0 : arr[1.1], 'other prop', '[1.1]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj[undefined], 40, '[undefined]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj[NaN], 41, '[NaN]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj[null], 42, '[null]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj['$'], 0, '["$"]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj[$], 43, '[$]');
assert.sameValue(obj === null || obj === void 0 ? void 0 : obj[true], 44, '[true]');