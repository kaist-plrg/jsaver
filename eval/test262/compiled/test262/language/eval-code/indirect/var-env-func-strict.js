function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performeval
es5id: 10.4.2.1-4-s
description: >
    Strict Mode - Strict mode eval code cannot instantiate functions
    in the variable environment of the caller to eval.
---*/
var typeofInside;

(function () {
  (0, eval)("'use strict'; function fun(){}");
  typeofInside = typeof fun === "undefined" ? "undefined" : _typeof(fun);
})();

assert.sameValue(typeofInside, "undefined");
assert.sameValue(typeof fun === "undefined" ? "undefined" : _typeof(fun), "undefined");