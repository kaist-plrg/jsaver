function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The [[Prototype]] property of the newly constructed object
    is set to the original Boolean prototype object, the one that is the
    initial value of Boolean.prototype
esid: sec-boolean-constructor
description: Checking prototype property of the newly created object
---*/
// CHECK#1
var x1 = new Boolean(1);

if (_typeof(x1.constructor.prototype) !== "object") {
  $ERROR('#1: typeof x1.constructor.prototype === "object"');
} //CHECK#2


var x2 = new Boolean(2);

if (!Boolean.prototype.isPrototypeOf(x2)) {
  $ERROR('#2: Boolean.prototype.isPrototypeOf(x2)');
} //CHECK#3


var x3 = new Boolean(3);

if (Boolean.prototype !== x3.constructor.prototype) {
  $ERROR('#3: Boolean.prototype === x3.constructor.prototype');
}