// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.1-4-6
description: >
    [[Call]] - length of parameters of 'target' is 0, length of
    'boundArgs' is 0, length of 'ExtraArgs' is 0, and with 'boundThis'
---*/
var obj = {
  prop: "abc"
};

var func = function func() {
  return this === obj && arguments.length === 0;
};

var newFunc = Function.prototype.bind.call(func, obj);
assert(newFunc(), 'newFunc() !== true');