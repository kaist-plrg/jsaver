function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2018 Shilpi Jain and Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.flatMap
description: >
  Throw a TypeError if this value is null or undefined
info: |
  Array.prototype.flatMap ( mapperFunction [ , thisArg ] )

  1. Let O be ? ToObject(this value).
  ...
features: [Array.prototype.flatMap]
---*/
assert.sameValue(_typeof(Array.prototype.flatMap), 'function');

var mapperFn = function mapperFn() {};

assert["throws"](TypeError, function () {
  [].flatMap.call(null, mapperFn);
}, 'null value');
assert["throws"](TypeError, function () {
  [].flatMap.call(undefined, mapperFn);
}, 'undefined');