// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-547-4
description: >
    ES5 Attributes - Updating an indexed accessor property 'P' whose
    [[Configurable]] attribute is false to a data property does not
    succeed, 'A' is an Arguments object (8.12.9 step 9.a)
includes: [propertyHelper.js]
---*/
var obj = function () {
  return arguments;
}();

obj.verifySetFunc = "data";

var getFunc = function getFunc() {
  return obj.verifySetFunc;
};

var setFunc = function setFunc(value) {
  obj.verifySetFunc = value;
};

Object.defineProperty(obj, "0", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

try {
  Object.defineProperty(obj, "0", {
    value: 1001
  });
  $ERROR("Expected an exception.");
} catch (e) {
  var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

  if (!desc1.hasOwnProperty("get")) {
    $ERROR('Expected desc1.hasOwnProperty("get") to be true, actually ' + desc1.hasOwnProperty("get"));
  }

  if (desc2.hasOwnProperty("value")) {
    $ERROR('Expected !desc2.hasOwnProperty("value") to be true, actually ' + !desc2.hasOwnProperty("value"));
  }

  verifyEqualTo(obj, "0", getFunc());
  verifyWritable(obj, "0", "verifySetFunc");
  verifyEnumerable(obj, "0");
  verifyNotConfigurable(obj, "0");

  if (!(e instanceof TypeError)) {
    $ERROR("Expected TypeError, got " + e);
  }
}