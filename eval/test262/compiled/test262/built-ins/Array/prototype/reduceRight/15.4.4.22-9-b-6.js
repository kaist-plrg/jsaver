// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - properties added to prototype in
    step 8 visited on an Array-like object
---*/
var testResult = false;

function callbackfn(preVal, curVal, idx, obj) {
  if (idx === 1 && curVal === 6.99) {
    testResult = true;
  }
}

var obj = {
  length: 6
};
Object.defineProperty(obj, "2", {
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
Array.prototype.reduceRight.call(obj, callbackfn);
assert(testResult, 'testResult !== true');