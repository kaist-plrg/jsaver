function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Evaluate the production ObjectLiteral: { }"
es5id: 11.1.5_A1.1
description: >
    Checking various properteis of the object defined with "var object
    = {}"
---*/
var object = {}; //CHECK#1

if (_typeof(object) !== "object") {
  $ERROR('#1: var object = {}; typeof object === "object". Actual: ' + _typeof(object));
} //CHECK#2


if (object instanceof Object !== true) {
  $ERROR('#2: var object = {}; object instanceof Object === true');
} //CHECK#3


if (object.toString !== Object.prototype.toString) {
  $ERROR('#3: var object = {}; object.toString === Object.prototype.toString. Actual: ' + object.toString);
} //CHECK#4


if (object.toString() !== "[object Object]") {
  $ERROR('#4: var object = {}; object.toString === "[object Object]". Actual: ' + object.toString);
}