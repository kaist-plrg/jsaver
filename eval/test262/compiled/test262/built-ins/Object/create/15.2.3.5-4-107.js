// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-107
description: >
    Object.create - 'configurable' property of one property in
    'Properties' is own accessor property that overrides an inherited
    data property (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/
var proto = {
  configurable: true
};

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "configurable", {
  get: function get() {
    return false;
  }
});
var newObj = Object.create({}, {
  prop: descObj
});
assert(newObj.hasOwnProperty("prop"));
verifyNotConfigurable(newObj, "prop");