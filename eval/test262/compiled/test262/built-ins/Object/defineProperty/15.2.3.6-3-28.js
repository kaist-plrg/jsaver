// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-28
description: >
    Object.defineProperty - 'enumerable' property in 'Attributes' is
    own accessor property that overrides an inherited data property
    (8.10.5 step 3.a)
---*/
var obj = {};
var accessed = false;
var proto = {
  enumerable: false
};

var ConstructFun = function ConstructFun() {};

ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "enumerable", {
  get: function get() {
    return true;
  }
});
Object.defineProperty(obj, "property", child);

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');