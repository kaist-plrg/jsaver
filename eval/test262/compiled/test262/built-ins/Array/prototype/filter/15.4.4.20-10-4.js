// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter doesn't visit expandos
---*/
var callCnt = 0;

function callbackfn(val, idx, obj) {
  callCnt++;
}

var srcArr = [1, 2, 3, 4, 5];
srcArr["i"] = 10;
srcArr[true] = 11;
var resArr = srcArr.filter(callbackfn);
assert.sameValue(callCnt, 5, 'callCnt');