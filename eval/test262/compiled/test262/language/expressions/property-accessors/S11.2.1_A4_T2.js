function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T2
description: Checking properties and methods of Object objects
---*/
//CHECK#1-8
if (_typeof(Object.prototype) !== "object") $ERROR('#1: typeof Object.prototype === "object". Actual: ' + _typeof(Object.prototype));
if (_typeof(Object['prototype']) !== "object") $ERROR('#2: typeof Object["prototype"] === "object". Actual: ' + _typeof(Object["prototype"]));
if (typeof Object.toString !== "function") $ERROR('#3: typeof Object.toString === "function". Actual: ' + _typeof(Object.toString));
if (typeof Object['toString'] !== "function") $ERROR('#4: typeof Object["toString"] === "function". Actual: ' + _typeof(Object["toString"]));
if (typeof Object.valueOf !== "function") $ERROR('#5: typeof Object.valueOf === "function". Actual: ' + _typeof(Object.valueOf));
if (typeof Object['valueOf'] !== "function") $ERROR('#6: typeof Object["valueOf"] === "function". Actual: ' + _typeof(Object["valueOf"]));
if (typeof Object.constructor !== "function") $ERROR('#7: typeof Object.constructor === "function". Actual: ' + _typeof(Object.constructor));
if (typeof Object['constructor'] !== "function") $ERROR('#8: typeof Object["constructor"] === "function". Actual: ' + _typeof(Object["constructor"]));