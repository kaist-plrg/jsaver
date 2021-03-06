// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-9-b-6
description: >
    Array.prototype.filter - properties can be added to prototype
    after current position are visited on an Array-like object
---*/
function callbackfn(val, idx, obj) {
  return true;
}

var obj = {
  length: 2
};
Object.defineProperty(obj, "0", {
  get: function get() {
    Object.defineProperty(Object.prototype, "1", {
      get: function get() {
        return 6.99;
      },
      configurable: true
    });
    return 0;
  },
  configurable: true
});
var newArr = Array.prototype.filter.call(obj, callbackfn);
assert.sameValue(newArr.length, 2, 'newArr.length');
assert.sameValue(Array[1], 6.99, 'Array[1]');