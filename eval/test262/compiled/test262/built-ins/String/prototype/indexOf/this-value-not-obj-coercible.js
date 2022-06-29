function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.indexof
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/
var indexOf = String.prototype.indexOf;
assert.sameValue(_typeof(indexOf), 'function');
assert["throws"](TypeError, function () {
  indexOf.call(undefined, '');
}, 'undefined');
assert["throws"](TypeError, function () {
  indexOf.call(null, '');
}, 'null');