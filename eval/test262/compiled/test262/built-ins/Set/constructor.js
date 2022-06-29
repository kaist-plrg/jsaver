function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 23.2.1
description: >
    The Set constructor is the %Set% intrinsic object and the
    initial value of the Set property of the global object.
---*/
assert.sameValue(typeof Set === "undefined" ? "undefined" : _typeof(Set), "function", "`typeof Set` is `'function'`");