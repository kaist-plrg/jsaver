// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-11
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    own data property that overrides an inherited accessor property
    (8.10.5 step 3.a)
---*/
var obj = {};
var proto = {};
var accessed = false;
Object.defineProperty(proto, "enumerable", {
  get: function get() {
    return true;
  }
});

var Con = function Con() {};

Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "enumerable", {
  value: false
});
Object.defineProperties(obj, {
  prop: descObj
});

for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert.sameValue(accessed, false, 'accessed');