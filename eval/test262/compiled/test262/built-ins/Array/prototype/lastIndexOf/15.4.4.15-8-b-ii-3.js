// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - both type of array element and type
    of search element are Null
---*/
assert.sameValue([null].lastIndexOf(null), 0, '[null].lastIndexOf(null)');