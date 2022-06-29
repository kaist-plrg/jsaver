function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T4
description: Checking properties of the Array object
---*/
//CHECK#1-8
if (_typeof(Array.prototype) !== "object") $ERROR('#1: typeof Array.prototype === "object". Actual: ' + _typeof(Array.prototype));
if (_typeof(Array['prototype']) !== "object") $ERROR('#2: typeof Array["prototype"] === "object". Actual: ' + _typeof(Array["prototype"]));
if (typeof Array.length !== "number") $ERROR('#3: typeof Array.length === "number". Actual: ' + _typeof(Array.length));
if (typeof Array['length'] !== "number") $ERROR('#4: typeof Array["length"] === "number". Actual: ' + _typeof(Array["length"]));
if (typeof Array.prototype.constructor !== "function") $ERROR('#5: typeof Array.prototype.constructor === "function". Actual: ' + _typeof(Array.prototype.constructor));
if (typeof Array.prototype['constructor'] !== "function") $ERROR('#6: typeof Array.prototype["constructor"] === "function". Actual: ' + _typeof(Array.prototype["constructor"]));
if (typeof Array.prototype.toString !== "function") $ERROR('#7: typeof Array.prototype.toString === "function". Actual: ' + _typeof(Array.prototype.toString));
if (typeof Array.prototype['toString'] !== "function") $ERROR('#8: typeof Array.prototype["toString"] === "function". Actual: ' + _typeof(Array.prototype["toString"]));
if (typeof Array.prototype.join !== "function") $ERROR('#9: typeof Array.prototype.join === "function". Actual: ' + _typeof(Array.prototype.join));
if (typeof Array.prototype['join'] !== "function") $ERROR('#10: typeof Array.prototype["join"] === "function". Actual: ' + _typeof(Array.prototype["join"]));
if (typeof Array.prototype.reverse !== "function") $ERROR('#11: typeof Array.prototype.reverse === "function". Actual: ' + _typeof(Array.prototype.reverse));
if (typeof Array.prototype['reverse'] !== "function") $ERROR('#12: typeof Array.prototype["reverse"] === "function". Actual: ' + _typeof(Array.prototype["reverse"]));
if (typeof Array.prototype.sort !== "function") $ERROR('#13: typeof Array.prototype.sort === "function". Actual: ' + _typeof(Array.prototype.sort));
if (typeof Array.prototype['sort'] !== "function") $ERROR('#14: typeof Array.prototype["sort"] === "function". Actual: ' + _typeof(Array.prototype["sort"]));