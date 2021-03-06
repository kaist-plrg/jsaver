// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-271
description: >
    Object.create - 'set' property of one property in 'Properties' is
    own data property that overrides an inherited accessor property
    (8.10.5 step 8.a)
---*/
var data1 = "data";
var data2 = "data";
var proto = {};
Object.defineProperty(proto, "set", {
  get: function get() {
    return function (value) {
      data2 = value;
    };
  }
});

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "set", {
  value: function value(_value) {
    data1 = _value;
  }
});
var newObj = Object.create({}, {
  prop: child
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";
assert(hasProperty, 'hasProperty !== true');
assert.sameValue(data1, "overrideData", 'data1');
assert.sameValue(data2, "data", 'data2');