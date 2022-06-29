function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check type of various properties
es5id: 11.2.1_A4_T5
description: Checking properties of the String object
---*/
//CHECK#1-28
if (_typeof(String.prototype) !== "object") $ERROR('#1: typeof String.prototype === "object". Actual: ' + _typeof(String.prototype));
if (_typeof(String['prototype']) !== "object") $ERROR('#2: typeof String["prototype"] === "object". Actual: ' + _typeof(String["prototype"]));
if (typeof String.fromCharCode !== "function") $ERROR('#3: typeof String.fromCharCode === "function". Actual: ' + _typeof(String.fromCharCode));
if (typeof String['fromCharCode'] !== "function") $ERROR('#4: typeof String["fromCharCode"] === "function". Actual: ' + _typeof(String["fromCharCode"]));
if (typeof String.prototype.toString !== "function") $ERROR('#5: typeof String.prototype.toString === "function". Actual: ' + _typeof(String.prototype.toString));
if (typeof String.prototype['toString'] !== "function") $ERROR('#6: typeof String.prototype["toString"] === "function". Actual: ' + _typeof(String.prototype["toString"]));
if (typeof String.prototype.constructor !== "function") $ERROR('#7: typeof String.prototype.constructor === "function". Actual: ' + _typeof(String.prototype.constructor));
if (typeof String.prototype['constructor'] !== "function") $ERROR('#8: typeof String.prototype["constructor"] === "function". Actual: ' + _typeof(String.prototype["constructor"]));
if (typeof String.prototype.valueOf !== "function") $ERROR('#9: typeof String.prototype.valueOf === "function". Actual: ' + _typeof(String.prototype.valueOf));
if (typeof String.prototype['valueOf'] !== "function") $ERROR('#10: typeof String.prototype["valueOf"] === "function". Actual: ' + _typeof(String.prototype["valueOf"]));
if (typeof String.prototype.charAt !== "function") $ERROR('#11: typeof String.prototype.charAt === "function". Actual: ' + _typeof(String.prototype.charAt));
if (typeof String.prototype['charAt'] !== "function") $ERROR('#12: typeof String.prototype["charAt"] === "function". Actual: ' + _typeof(String.prototype["charAt"]));
if (typeof String.prototype.charCodeAt !== "function") $ERROR('#13: typeof String.prototype.charCodeAt === "function". Actual: ' + _typeof(String.prototype.charCodeAt));
if (typeof String.prototype['charCodeAt'] !== "function") $ERROR('#14: typeof String.prototype["charCodeAt"] === "function". Actual: ' + _typeof(String.prototype["charCodeAt"]));
if (typeof String.prototype.indexOf !== "function") $ERROR('#15: typeof String.prototype.indexOf === "function". Actual: ' + _typeof(String.prototype.indexOf));
if (typeof String.prototype['indexOf'] !== "function") $ERROR('#16: typeof String.prototype["indexOf"] === "function". Actual: ' + _typeof(String.prototype["indexOf"]));
if (typeof String.prototype.lastIndexOf !== "function") $ERROR('#17: typeof String.prototype.lastIndexOf === "function". Actual: ' + _typeof(String.prototype.lastIndexOf));
if (typeof String.prototype['lastIndexOf'] !== "function") $ERROR('#18: typeof String.prototype["lastIndexOf"] === "function". Actual: ' + _typeof(String.prototype["lastIndexOf"]));
if (typeof String.prototype.split !== "function") $ERROR('#19: typeof String.prototype.split === "function". Actual: ' + _typeof(String.prototype.split));
if (typeof String.prototype['split'] !== "function") $ERROR('#20: typeof String.prototype["split"] === "function". Actual: ' + _typeof(String.prototype["split"]));
if (typeof String.prototype.substring !== "function") $ERROR('#21: typeof String.prototype.substring === "function". Actual: ' + _typeof(String.prototype.substring));
if (typeof String.prototype['substring'] !== "function") $ERROR('#22: typeof String.prototype["substring"] === "function". Actual: ' + _typeof(String.prototype["substring"]));
if (typeof String.prototype.toLowerCase !== "function") $ERROR('#23: typeof String.prototype.toLowerCase === "function". Actual: ' + _typeof(String.prototype.toLowerCase));
if (typeof String.prototype['toLowerCase'] !== "function") $ERROR('#24: typeof String.prototype["toLowerCase"] === "function". Actual: ' + _typeof(String.prototype["toLowerCase"]));
if (typeof String.prototype.toUpperCase !== "function") $ERROR('#25: typeof String.prototype.toUpperCase === "function". Actual: ' + _typeof(String.prototype.toUpperCase));
if (typeof String.prototype['toUpperCase'] !== "function") $ERROR('#26: typeof Array.prototype === "object". Actual: ' + _typeof(Array.prototype));
if (typeof String.prototype.length !== "number") $ERROR('#27: typeof String.prototype.length === "number". Actual: ' + _typeof(String.prototype.length));
if (typeof String.prototype['length'] !== "number") $ERROR('#28: typeof String.prototype["length"] === "number". Actual: ' + _typeof(String.prototype["length"]));