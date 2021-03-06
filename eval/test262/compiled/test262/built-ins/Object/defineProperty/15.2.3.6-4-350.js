// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-350
description: >
    ES5 Attributes - fail to update [[Writable]] attribute of data
    property ([[Writable]] is true, [[Enumerable]] is false,
    [[Configurable]] is false) to different value
---*/
var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: false,
  configurable: false
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  writable: false
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc1.writable, true, 'desc1.writable');
assert.sameValue(obj.prop, 2010, 'obj.prop');
assert.sameValue(desc2.writable, false, 'desc2.writable');