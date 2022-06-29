function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Promise.any invoked on a non-constructor value
esid: sec-promise.any
info: |
  ...
  2. Let promiseCapability be ? NewPromiseCapability(C).

  NewPromiseCapability ( C )

  1. If IsConstructor(C) is false, throw a TypeError exception.

features: [Promise.any, Symbol]
---*/
assert.sameValue(_typeof(Promise.any), 'function');
assert["throws"](TypeError, function () {
  Promise.any.call(eval);
});