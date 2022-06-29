function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimEnd
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
features: [string-trimming, String.prototype.trimEnd]
---*/
var trimEnd = String.prototype.trimEnd;
assert.sameValue(_typeof(trimEnd), 'function');
assert["throws"](TypeError, function () {
  trimEnd.call(undefined);
}, 'undefined');
assert["throws"](TypeError, function () {
  trimEnd.call(null);
}, 'null');