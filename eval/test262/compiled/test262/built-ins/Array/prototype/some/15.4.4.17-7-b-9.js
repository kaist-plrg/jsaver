// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - deleting own property causes index property
    not to be visited on an Array
---*/
var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return idx === 1;
}

var arr = [1, 2];
Object.defineProperty(arr, "1", {
  get: function get() {
    return "6.99";
  },
  configurable: true
});
Object.defineProperty(arr, "0", {
  get: function get() {
    delete arr[1];
    return 0;
  },
  configurable: true
});
assert.sameValue(arr.some(callbackfn), false, 'arr.some(callbackfn)');
assert(accessed, 'accessed !== true');