// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - side effects produced by step 2 are
    visible when an exception occurs
---*/
var stepTwoOccurs = false;
var stepFiveOccurs = false;
var obj = {};
Object.defineProperty(obj, "length", {
  get: function get() {
    stepTwoOccurs = true;

    if (stepFiveOccurs) {
      throw new Error("Step 5 occurred out of order");
    }

    return 20;
  },
  configurable: true
});
var fromIndex = {
  valueOf: function valueOf() {
    stepFiveOccurs = true;
    return 0;
  }
};
Array.prototype.lastIndexOf.call(obj, undefined, fromIndex);
assert(stepTwoOccurs, 'stepTwoOccurs !== true');
assert(stepFiveOccurs, 'stepFiveOccurs !== true');