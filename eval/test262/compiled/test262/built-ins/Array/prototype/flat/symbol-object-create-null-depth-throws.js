function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2018 Shilpi Jain and Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.flat
description: >
    if the argument is a Symbol or Object null, it throws exception
features: [Array.prototype.flat]
---*/
assert.sameValue(_typeof(Array.prototype.flat), 'function');
assert["throws"](TypeError, function () {
  [].flat(Symbol());
}, 'symbol value');
assert["throws"](TypeError, function () {
  [].flat(Object.create(null));
}, 'object create null');