function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Evaluate the production ObjectLiteral: { NumericLiteral :
    AssignmentExpression}
es5id: 11.1.5_A1.2
description: >
    Checking various properteis and contents of the object defined
    with "var object = {1 : true}"
---*/
var object = {
  1: true
}; //CHECK#1

if (_typeof(object) !== "object") {
  $ERROR('#1: var object = {1 : true}; typeof object === "object". Actual: ' + _typeof(object));
} //CHECK#2


if (object instanceof Object !== true) {
  $ERROR('#2: var object = {1 : true}; object instanceof Object === true');
} //CHECK#3


if (object.toString !== Object.prototype.toString) {
  $ERROR('#3: var object = {1 : true}; object.toString === Object.prototype.toString. Actual: ' + object.toString);
} //CHECK#4


if (object[1] !== true) {
  $ERROR('#4: var object = {1 : true}; object[1] === true');
} //CHECK#5


if (object["1"] !== true) {
  $ERROR('#5: var object = {1 : true}; object["1"] === true');
}