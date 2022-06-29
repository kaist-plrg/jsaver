function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2018 Shilpi Jain and Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.flat
description: >
    Behavior when `constructor` property is neither an Object nor undefined
    - if IsConstructor(C) is false, throw a TypeError exception.
features: [Array.prototype.flat]
---*/
assert.sameValue(_typeof(Array.prototype.flat), 'function');
var a = [];
a.constructor = null;
assert["throws"](TypeError, function () {
  a.flat();
}, 'null value');
a = [];
a.constructor = 1;
assert["throws"](TypeError, function () {
  a.flat();
}, 'number value');
a = [];
a.constructor = 'string';
assert["throws"](TypeError, function () {
  a.flat();
}, 'string value');
a = [];
a.constructor = true;
assert["throws"](TypeError, function () {
  a.flat();
}, 'boolean value');