// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_34
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    own getter/setter property)
---*/
var o = {};
Object.defineProperty(o, "foo", {
  get: function get() {
    return 42;
  },
  set: function set() {
    ;
  }
});
assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');