function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weakmap-constructor
description: >
  The WeakMap constructor is the %WeakMap% intrinsic object and the initial
  value of the WeakMap property of the global object.
---*/
assert.sameValue(typeof WeakMap === "undefined" ? "undefined" : _typeof(WeakMap), 'function', 'typeof WeakMap is "function"');