// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach applied to Array-like object, 'length' is
    an own accessor property that overrides an inherited data property
---*/
var result = false;

function callbackfn(val, idx, obj) {
  result = obj.length === 2;
}

var proto = {
  length: 3
};

var Con = function Con() {};

Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "length", {
  get: function get() {
    return 2;
  },
  configurable: true
});
child[0] = 12;
child[1] = 11;
child[2] = 9;
Array.prototype.forEach.call(child, callbackfn);
assert(result, 'result !== true');