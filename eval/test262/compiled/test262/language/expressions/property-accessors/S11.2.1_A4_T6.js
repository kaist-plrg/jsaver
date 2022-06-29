function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T6
description: Checking properties of the Boolean object
---*/
//CHECK#1-8
if (_typeof(Boolean.prototype) !== "object") $ERROR('#1: typeof Boolean.prototype === "object". Actual: ' + _typeof(Boolean.prototype));
if (_typeof(Boolean['prototype']) !== "object") $ERROR('#2: typeof Boolean["prototype"] === "object". Actual: ' + _typeof(Boolean["prototype"]));
if (typeof Boolean.constructor !== "function") $ERROR('#3: typeof Boolean.constructor === "function". Actual: ' + _typeof(Boolean.constructor));
if (typeof Boolean['constructor'] !== "function") $ERROR('#4: typeof Boolean["constructor"] === "function". Actual: ' + _typeof(Boolean["constructor"]));
if (typeof Boolean.prototype.valueOf !== "function") $ERROR('#5: typeof Boolean.prototype.valueOf === "function". Actual: ' + _typeof(Boolean.prototype.valueOf));
if (typeof Boolean.prototype['valueOf'] !== "function") $ERROR('#6: typeof Boolean.prototype["valueOf"] === "function". Actual: ' + _typeof(Boolean.prototype["valueOf"]));
if (typeof Boolean.prototype.toString !== "function") $ERROR('#7: typeof Boolean.prototype.toString === "function". Actual: ' + _typeof(Boolean.prototype.toString));
if (typeof Boolean.prototype['toString'] !== "function") $ERROR('#8: typeof Boolean.prototype["toString"] === "function". Actual: ' + _typeof(Boolean.prototype["toString"]));