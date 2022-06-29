function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-5
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a String object
---*/
var strObj = new String();
var preCheck = Object.isExtensible(strObj);
Object.preventExtensions(strObj);
assert["throws"](TypeError, function () {
  Object.defineProperty(strObj, "0", {
    value: "c"
  });
});
assert(preCheck, 'preCheck !== true');
assert.sameValue(strObj.hasOwnProperty("0"), false, 'strObj.hasOwnProperty("0")');
assert.sameValue(_typeof(strObj[0]), "undefined", 'typeof strObj[0]');