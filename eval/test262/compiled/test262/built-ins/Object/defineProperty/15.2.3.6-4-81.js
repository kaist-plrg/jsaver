// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-81
description: >
    Object.defineProperty - both desc.configurable and
    name.configurable are booleans with the same value (8.12.9 step 6)
includes: [propertyHelper.js]
---*/
var obj = {};
Object.defineProperty(obj, "foo", {
  configurable: false
});
Object.defineProperty(obj, "foo", {
  configurable: false
});
verifyEqualTo(obj, "foo", undefined);
verifyNotWritable(obj, "foo");
verifyNotEnumerable(obj, "foo");
verifyNotConfigurable(obj, "foo");