// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws TypeError if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf), no
    initVal
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

assert["throws"](TypeError, function () {
  f.reduce(cb);
});