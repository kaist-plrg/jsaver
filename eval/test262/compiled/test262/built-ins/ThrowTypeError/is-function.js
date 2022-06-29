function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is a function object.
info: |
  %ThrowTypeError% ( )

  The %ThrowTypeError% intrinsic is an anonymous built-in function
  object that is defined once for each realm.
---*/
var ThrowTypeError = Object.getOwnPropertyDescriptor(function () {
  "use strict";

  return arguments;
}(), "callee").get;
assert.sameValue(_typeof(ThrowTypeError), "function");