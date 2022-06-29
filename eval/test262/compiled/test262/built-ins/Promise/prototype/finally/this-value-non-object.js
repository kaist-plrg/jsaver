function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jordan Harband
description: >
  Promise.prototype.finally called with a non-object-coercible `this` value
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/
assert.sameValue(_typeof(Promise.prototype["finally"]), 'function');
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(undefined);
}, 'undefined');
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(null);
}, 'null');