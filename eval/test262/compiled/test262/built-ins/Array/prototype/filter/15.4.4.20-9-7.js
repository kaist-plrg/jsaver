function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-9-7
description: >
    Array.prototype.filter stops calling callbackfn once the array is
    deleted during the call
---*/
var o = new Object();
o.srcArr = [1, 2, 3, 4, 5];

function callbackfn(val, idx, obj) {
  delete o.srcArr;
  if (val > 0) return true;else return false;
}

var resArr = o.srcArr.filter(callbackfn);
assert.sameValue(resArr.length, 5, 'resArr.length');
assert.sameValue(_typeof(o.srcArr), "undefined", 'typeof o.srcArr');