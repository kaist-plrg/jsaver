// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_24
description: Properties - [[HasOwnProperty]] (literal inherited setter property)
---*/
var base = {
  set foo(x) {
    ;
  }

};
var o = Object.create(base);
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');