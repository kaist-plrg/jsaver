// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - the length of iteration isn't changed by
    adding elements to the array during iteration
---*/
var arr = [20];
Object.defineProperty(arr, "0", {
  get: function get() {
    arr[1] = 1;
    return 0;
  },
  configurable: true
});
assert.sameValue(arr.indexOf(1), -1, 'arr.indexOf(1)');