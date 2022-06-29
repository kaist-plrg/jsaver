function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2018 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.fromentries
description: Throws when called without an argument.
info: |
  Object.fromEntries ( iterable )

  1. Perform ? RequireObjectCoercible(iterable).
  ...

features: [Object.fromEntries]
---*/
assert.sameValue(_typeof(Object.fromEntries), 'function');
assert["throws"](TypeError, function () {
  Object.fromEntries();
});