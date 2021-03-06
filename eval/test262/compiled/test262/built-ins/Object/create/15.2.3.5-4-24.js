// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-24
description: >
    Object.create - own enumerable accessor property that overrides an
    enumerable inherited data property in 'Properties' is defined in
    'obj' (15.2.3.7 step 5.a)
---*/
var proto = {};
proto.prop = {
  value: 12
};

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "prop", {
  get: function get() {
    return {
      value: 9
    };
  },
  enumerable: true
});
var newObj = Object.create({}, child);
assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
assert.sameValue(newObj.prop, 9, 'newObj.prop');