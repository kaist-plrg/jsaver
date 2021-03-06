function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T7
description: Checking properties of the Number object
---*/
//CHECK#1-16
if (typeof Number.MAX_VALUE !== "number") $ERROR('#1: typeof Number.MAX_VALUE === "number". Actual: ' + _typeof(Number.MAX_VALUE));
if (typeof Number['MAX_VALUE'] !== "number") $ERROR('#2: typeof Number["MAX_VALUE"] === "number". Actual: ' + _typeof(Number["MAX_VALUE"]));
if (typeof Number.MIN_VALUE !== "number") $ERROR('#3: typeof Number.MIN_VALUE === "number". Actual: ' + _typeof(Number.MIN_VALUE));
if (typeof Number['MIN_VALUE'] !== "number") $ERROR('#4: typeof Number["MIN_VALUE"] === "number". Actual: ' + _typeof(Number["MIN_VALUE"]));
if (typeof Number.NaN !== "number") $ERROR('#5: typeof Number.NaN === "number". Actual: ' + _typeof(Number.NaN));
if (typeof Number['NaN'] !== "number") $ERROR('#6: typeof Number["NaN"] === "number". Actual: ' + _typeof(Number["NaN"]));
if (typeof Number.NEGATIVE_INFINITY !== "number") $ERROR('#7: typeof Number.NEGATIVE_INFINITY === "number". Actual: ' + _typeof(Number.NEGATIVE_INFINITY));
if (typeof Number['NEGATIVE_INFINITY'] !== "number") $ERROR('#8: typeof Number["NEGATIVE_INFINITY"] === "number". Actual: ' + _typeof(Number["NEGATIVE_INFINITY"]));
if (typeof Number.POSITIVE_INFINITY !== "number") $ERROR('#9: typeof Number.POSITIVE_INFINITY === "number". Actual: ' + _typeof(Number.POSITIVE_INFINITY));
if (typeof Number['POSITIVE_INFINITY'] !== "number") $ERROR('#10: typeof Number["POSITIVE_INFINITY"] === "number". Actual: ' + _typeof(Number["POSITIVE_INFINITY"]));
if (typeof Number.prototype.toString !== "function") $ERROR('#11: typeof Number.prototype.toString === "function". Actual: ' + _typeof(Number.prototype.toString));
if (typeof Number.prototype['toString'] !== "function") $ERROR('#12: typeof Number.prototype["toString"] === "function". Actual: ' + _typeof(Number.prototype["toString"]));
if (typeof Number.prototype.constructor !== "function") $ERROR('#13: typeof Number.prototype.constructor === "function". Actual: ' + _typeof(Number.prototype.constructor));
if (typeof Number.prototype['constructor'] !== "function") $ERROR('#14: typeof Number.prototype["constructor"] === "function". Actual: ' + _typeof(Number.prototype["constructor"]));
if (typeof Number.prototype.valueOf !== "function") $ERROR('#15: typeof Number.prototype.valueOf === "function". Actual: ' + _typeof(Number.prototype.valueOf));
if (typeof Number.prototype['valueOf'] !== "function") $ERROR('#16: typeof Number.prototype["valueOf"] === "function". Actual: ' + _typeof(Number.prototype["valueOf"]));