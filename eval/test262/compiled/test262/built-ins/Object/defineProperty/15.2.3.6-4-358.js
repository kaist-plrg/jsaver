// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-358
description: >
    ES5 Attributes - success to update [[Enumerable]] attribute of
    data property ([[Writable]] is false, [[Enumerable]] is true,
    [[Configurable]] is true) to different value
---*/
var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: true,
  configurable: true
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  enumerable: false
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc1.enumerable, true, 'desc1.enumerable');
assert.sameValue(obj.prop, 2010, 'obj.prop');
assert.sameValue(desc2.enumerable, false, 'desc2.enumerable');