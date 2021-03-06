// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-540-7
description: >
    Object.defineProperty fails to update [[Get]] and [[Set]]
    attributes of a named property 'P' whose [[Configurable]]
    attribute is false and throws TypeError exception, 'A' is an Array
    object (8.12.9 step 11.a)
includes: [propertyHelper.js]
---*/
var obj = [];
obj.verifySetFunction = "data";

var getFunc = function getFunc() {
  return obj.verifySetFunction;
};

var setFunc = function setFunc(value) {
  obj.verifySetFunction = value;
};

Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: setFunc,
  configurable: false
});
var result = false;

try {
  Object.defineProperty(obj, "prop", {
    get: function get() {
      return 100;
    }
  });
} catch (e) {
  result = e instanceof TypeError;
  verifyEqualTo(obj, "prop", getFunc());
  verifyWritable(obj, "prop", "verifySetFunction");
  verifyNotEnumerable(obj, "prop");
  verifyNotConfigurable(obj, "prop");
}

try {
  Object.defineProperty(obj, "prop", {
    set: function set(value) {
      obj.verifySetFunction1 = value;
    }
  });
} catch (e1) {
  if (!result) {
    $ERROR('Expected result to be true, actually ' + result);
  }

  verifyEqualTo(obj, "prop", getFunc());
  verifyWritable(obj, "prop", "verifySetFunction");
  verifyNotEnumerable(obj, "prop");
  verifyNotConfigurable(obj, "prop");

  if (!(e1 instanceof TypeError)) {
    $ERROR("Expected TypeError, got " + e1);
  }
}