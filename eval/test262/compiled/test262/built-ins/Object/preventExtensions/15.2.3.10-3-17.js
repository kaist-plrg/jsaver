// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-17
description: >
    Object.preventExtensions - named properties cannot be added into a
    Number object
includes: [propertyHelper.js]
---*/
var obj = new Number(123);
assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));
verifyNotWritable(obj, "exName", "nocheck");
assert(!obj.hasOwnProperty("exName"));