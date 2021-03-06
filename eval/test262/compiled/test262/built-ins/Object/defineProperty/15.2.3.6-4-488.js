// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-488
description: >
    ES5 Attributes - property ([[Get]] is undefined, [[Set]] is a
    Function, [[Enumerable]] is false, [[Configurable]] is false) is
    undeletable
includes: [propertyHelper.js]
---*/
var obj = {};
var verifySetFunc = "data";

var setFunc = function setFunc(value) {
  verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
  get: undefined,
  set: setFunc,
  enumerable: false,
  configurable: false
});
assert(obj.hasOwnProperty("prop"));
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
verifyNotConfigurable(obj, "prop");
assert.sameValue(desc.configurable, false);
assert(obj.hasOwnProperty("prop"));