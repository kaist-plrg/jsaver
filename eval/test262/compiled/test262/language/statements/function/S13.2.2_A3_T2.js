function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the [[Construct]] property for a Function object F is called:
    A new native ECMAScript object is created.
    It gets the value of the [[Prototype]] property of the F(Denote it PROTO_VAL).
    If PROTO_VAL is not an object, sets the [[Prototype]] property of native ECMAScript object just created
    to the original Object prototype object as described in 15.2.3.1
es5id: 13.2.2_A3_T2
description: Declaring a function with "var __FACTORY = function()"
---*/
var __FACTORY = function __FACTORY() {};

__FACTORY.prototype = 1; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (typeof __FACTORY.prototype !== 'number') {
  $ERROR('#1: typeof __FACTORY.prototype === \'number\'. Actual: typeof __FACTORY.prototype ===' + _typeof(__FACTORY.prototype));
} //
//////////////////////////////////////////////////////////////////////////////


var __device = new __FACTORY(); //////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (!Object.prototype.isPrototypeOf(__device)) {
  $ERROR('#2: Object.prototype.isPrototypeOf(__device) === true');
} //
//////////////////////////////////////////////////////////////////////////////