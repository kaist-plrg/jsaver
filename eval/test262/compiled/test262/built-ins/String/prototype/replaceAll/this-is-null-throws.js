function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  Throws TypeError when `this` is null
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  1. Let O be RequireObjectCoercible(this value).
  ...

  RequireObjectCoercible ( argument )

  - Undefined: Throw a TypeError exception.
  - Null: Throw a TypeError exception.
features: [String.prototype.replaceAll]
---*/
assert.sameValue(_typeof(String.prototype.replaceAll), 'function', 'function must exist');
assert["throws"](TypeError, function () {
  String.prototype.replaceAll.call(null);
});