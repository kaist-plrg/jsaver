function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2.1-4-s
description: >
    Strict Mode - Strict mode eval code cannot instantiate functions
    in the variable environment of the caller to eval.
---*/
function testcase() {
  eval("'use strict'; function _10_4_2_1_4_fun(){}");
  assert.sameValue(typeof _10_4_2_1_4_fun === "undefined" ? "undefined" : _typeof(_10_4_2_1_4_fun), "undefined");
}

testcase();