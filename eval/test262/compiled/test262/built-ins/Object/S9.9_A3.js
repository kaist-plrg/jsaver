function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    ToObject conversion from Boolean: create a new Boolean object
    whose [[value]] property is set to the value of the boolean
es5id: 9.9_A3
description: Trying to convert from Boolean to Object
---*/
// CHECK#1
if (Object(true).valueOf() !== true) {
  $ERROR('#1: Object(true).valueOf() === true. Actual: ' + Object(true).valueOf());
} // CHECK#2


if (_typeof(Object(true)) !== "object") {
  $ERROR('#2: typeof Object(true) === "object". Actual: ' + _typeof(Object(true)));
} // CHECK#3


if (Object(true).constructor.prototype !== Boolean.prototype) {
  $ERROR('#3: Object(true).constructor.prototype === Boolean.prototype. Actual: ' + Object(true).constructor.prototype);
} // CHECK#4


if (Object(false).valueOf() !== false) {
  $ERROR('#4: Object(false).valueOf() === false. Actual: ' + Object(false).valueOf());
} // CHECK#5


if (_typeof(Object(false)) !== "object") {
  $ERROR('#5: typeof Object(false) === "object". Actual: ' + _typeof(Object(false)));
} // CHECK#6


if (Object(false).constructor.prototype !== Boolean.prototype) {
  $ERROR('#6: Object(false).constructor.prototype === Boolean.prototype. Actual: ' + Object(false).constructor.prototype);
}