function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-29-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within a FunctionDeclaration inside strict mode)
flags: [onlyStrict]
---*/
function f1() {
  return function () {
    return _typeof(this);
  }() === "undefined" && typeof this === "undefined";
}

assert(f1(), 'f1() !== true');