// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-237
description: >
    Object.create - 'get' property of one property in 'Properties' is
    own accessor property (8.10.5 step 7.a)
---*/
var descObj = {};
Object.defineProperty(descObj, "get", {
  get: function get() {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
var newObj = Object.create({}, {
  prop: descObj
});
assert.sameValue(newObj.prop, "ownAccessorProperty", 'newObj.prop');