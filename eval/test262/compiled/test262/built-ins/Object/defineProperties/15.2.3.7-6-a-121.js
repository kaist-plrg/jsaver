// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-121
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', test RangeError is thrown when setting the
    [[Value]] field of 'desc' to undefined (15.4.5.1 step 3.c)
---*/
var arr = [];
assert["throws"](RangeError, function () {
  Object.defineProperties(arr, {
    length: {
      value: undefined
    }
  });
});
assert.sameValue(arr.length, 0, 'arr.length');