function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Evaluate the production ArrayLiteral: [ Elision, AssignmentExpression,
    Elision ]
es5id: 11.1.4_A1.6
description: >
    Checking various properteis and contents of the array defined with
    "var array = [,,3,,,]"
---*/
var array = [,, 3,,,]; //CHECK#1

if (_typeof(array) !== "object") {
  $ERROR('#1: var array = [,,3,,,]; typeof array === "object". Actual: ' + _typeof(array));
} //CHECK#2


if (array instanceof Array !== true) {
  $ERROR('#2: var array = [,,3,,,]; array instanceof Array === true');
} //CHECK#3


if (array.toString !== Array.prototype.toString) {
  $ERROR('#3: var array = [,,3,,,]; array.toString === Array.prototype.toString. Actual: ' + array.toString);
} //CHECK#4


if (array.length !== 5) {
  $ERROR('#4: var array = [,,3,,,]; array.length === 5. Actual: ' + array.length);
} //CHECK#5


if (array[0] !== undefined) {
  $ERROR('#5: var array = [,,3,,,]; array[0] === undefined. Actual: ' + array[0]);
} //CHECK#6


if (array[1] !== undefined) {
  $ERROR('#6: var array = [,,3,,,]; array[1] === undefined. Actual: ' + array[1]);
} //CHECK#7


if (array[2] !== 3) {
  $ERROR('#7: var array = [,,3,,,]; array[2] === 3. Actual: ' + array[2]);
} //CHECK#8


if (array[3] !== undefined) {
  $ERROR('#8: var array = [,,3,,,]; array[3] === undefined. Actual: ' + array[3]);
} //CHECK#9


if (array[4] !== undefined) {
  $ERROR('#9: var array = [,,3,,,]; array[4] === undefined. Actual: ' + array[4]);
}