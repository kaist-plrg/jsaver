function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: FunctionDeclaration cannot be localed inside an Expression
es5id: 14_A2
description: Declaring a function within an "if" Expression
---*/
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof f !== 'undefined') {
  $ERROR('#1: typeof f === \'undefined\'. Actual:  typeof f ===' + (typeof f === "undefined" ? "undefined" : _typeof(f)));
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (function f(arg) {
  if (arg === 0) return 1;else return f(arg - 1) * arg;
}(3) !== 6) {
  $ERROR('#2: FunctionDeclaration cannot be localed inside an Expression');
}

; //
//////////////////////////////////////////////////////////////////////////////