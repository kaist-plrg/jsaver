// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce returns initialValue if 'length' is 0 and
    initialValue is present (subclassed Array, length overridden with
    obj with valueOf)
---*/
foo.prototype = new Array(1, 2, 3);

function foo() {}

var f = new foo();
var o = {
  valueOf: function valueOf() {
    return 0;
  }
};
f.length = o;

function cb() {}

assert.sameValue(f.reduce(cb, 1), 1, 'f.reduce(cb,1)');