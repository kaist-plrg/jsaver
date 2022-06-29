// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_46
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    inherited getter/setter property)
---*/
var base = {};
Object.defineProperty(base, "foo", {
  get: function get() {
    return 42;
  },
  set: function set() {
    ;
  }
});
var o = Object.create(base);
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');