function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T3
description: Checking properties of the Function object
---*/
//CHECK#1-8
if (typeof Function.prototype !== "function") $ERROR('#1: typeof Function.prototype === "function". Actual: ' + _typeof(Function.prototype));
if (typeof Function['prototype'] !== "function") $ERROR('#2: typeof Function["prototype"] === "function". Actual: ' + _typeof(Function["prototype"]));
if (typeof Function.prototype.toString !== "function") $ERROR('#3: typeof Function.prototype.toString === "function". Actual: ' + _typeof(Function.prototype.toString));
if (typeof Function.prototype['toString'] !== "function") $ERROR('#4: typeof Function.prototype["toString"] === "function". Actual: ' + _typeof(Function.prototype["toString"]));
if (typeof Function.prototype.length !== "number") $ERROR('#5: typeof Function.prototype.length === "number". Actual: ' + _typeof(Function.prototype.length));
if (typeof Function.prototype['length'] !== "number") $ERROR('#6: typeof Function.prototype["length"] === "number". Actual: ' + _typeof(Function.prototype["length"]));
if (typeof Function.prototype.valueOf !== "function") $ERROR('#7: typeof Function.prototype.valueOf === "function". Actual: ' + _typeof(Function.prototype.valueOf));
if (typeof Function.prototype['valueOf'] !== "function") $ERROR('#8: typeof Function.prototype["valueOf"] === "function". Actual: ' + _typeof(Function.prototype["valueOf"]));