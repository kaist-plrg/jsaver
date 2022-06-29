function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function argument that isn't provided has a value of undefined
es5id: 8.1_A5
description: Call function without provided argument
---*/
///////////////////////////////////////
//
function test(arg) {
  // Check and make sure that arg is not undefined
  if (typeof arg !== "undefined") {
    $ERROR('#1: Function argument that isn\'t provided has a value of undefined. Actual: ' + _typeof(arg));
  }
}

test(); //
////////////////////////////////////////