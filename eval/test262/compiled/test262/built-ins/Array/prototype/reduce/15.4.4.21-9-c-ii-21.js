// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - null can be used as accumulator
---*/
var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === null;
}

var obj = {
  0: 11,
  length: 1
};
assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, null), true, 'Array.prototype.reduce.call(obj, callbackfn, null)');
assert(accessed, 'accessed !== true');