// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-213
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 7.a)
---*/
var obj = {};
var proto = {
  get: function get() {
    return "inheritedDataProperty";
  }
};

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "get", {
  get: function get() {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
Object.defineProperty(obj, "property", child);
assert.sameValue(obj.property, "ownAccessorProperty", 'obj.property');