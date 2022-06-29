function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Created based on feedback in
    https://bugs.ecmascript.org/show_bug.cgi?id=333
es5id: 10.4.3-1-106
description: >
    Strict mode should not ToObject thisArg if not an object.  Return
    type should be 'number'.
flags: [onlyStrict]
---*/
Object.defineProperty(Object.prototype, "x", {
  get: function get() {
    return this;
  }
});
assert.sameValue(_typeof(5 .x), "number", 'typeof (5).x');