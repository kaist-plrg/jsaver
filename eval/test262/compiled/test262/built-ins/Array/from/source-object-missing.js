function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is an object with missing values
esid: sec-array.from
es6id: 22.1.2.1
---*/
var array = [2, 4,, 16];
var obj = {
  length: 4,
  0: 2,
  1: 4,
  3: 16
};
var a = Array.from.call(Object, obj);
assert.sameValue(_typeof(a), "object", "The returned type is expected to be object.");

for (var j = 0; j < a.length; j++) {
  assert.sameValue(a[j], array[j], "Elements mismatch at " + j + ".");
}