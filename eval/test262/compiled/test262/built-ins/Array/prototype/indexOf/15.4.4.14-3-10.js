// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'length' is number primitive
    (value is NaN)
---*/
var obj = {
  0: 0,
  length: NaN
};
assert.sameValue(Array.prototype.indexOf.call(obj, 0), -1, 'Array.prototype.indexOf.call(obj, 0)');