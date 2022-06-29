// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-10
description: >
    Object.defineProperties - 'P' is own accessor property without a
    get function that overrides an inherited accessor property (8.12.9
    step 1 )
---*/
var proto = {};
Object.defineProperty(proto, "prop", {
  get: function get() {
    return 11;
  },
  set: function set() {},
  configurable: true
});

var Con = function Con() {};

Con.prototype = proto;
var obj = new Con();
Object.defineProperty(obj, "prop", {
  set: function set() {},
  configurable: false
});
assert["throws"](TypeError, function () {
  Object.defineProperties(obj, {
    prop: {
      value: 12,
      configurable: true
    }
  });
});