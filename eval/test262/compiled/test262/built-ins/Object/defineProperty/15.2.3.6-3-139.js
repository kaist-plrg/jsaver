// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-139
description: >
    Object.defineProperty - 'Attributes' is a Function object which
    implements its own [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
---*/
var obj = {};

var funObj = function funObj(a, b) {
  return a + b;
};

funObj.value = "Function";
Object.defineProperty(obj, "property", funObj);
assert.sameValue(obj.property, "Function", 'obj.property');