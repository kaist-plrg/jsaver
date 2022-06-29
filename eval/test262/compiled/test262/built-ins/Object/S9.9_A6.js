function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    ToObject conversion from Object: The result is the input
    argument (no conversion)
es5id: 9.9_A6
description: Converting from Objects to Object
---*/
function MyObject(val) {
  this.value = val;

  this.valueOf = function () {
    return this.value;
  };
}

var x = new MyObject(1);
var y = Object(x); // CHECK#1

if (y.valueOf() !== x.valueOf()) {
  $ERROR('#1: Object(obj).valueOf() === obj.valueOf(). Actual: ' + Object(obj).valueOf());
} // CHECK#2


if (_typeof(y) !== _typeof(x)) {
  $ERROR('#2: typeof Object(obj) === typeof obj. Actual: ' + _typeof(Object(obj)));
} // CHECK#3


if (y.constructor.prototype !== x.constructor.prototype) {
  $ERROR('#3: Object(obj).constructor.prototype === obj.constructor.prototype. Actual: ' + Object(obj).constructor.prototype);
} // CHECK#4


if (y !== x) {
  $ERROR('#4: Object(obj) === obj');
}