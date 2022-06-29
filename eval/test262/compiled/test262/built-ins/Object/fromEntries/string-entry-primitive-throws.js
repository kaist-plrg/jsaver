function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2018 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Throws when an entry object is a primitive string.
esid: sec-object.fromentries
features: [Object.fromEntries]
---*/
assert.sameValue(_typeof(Object.fromEntries), 'function');
assert["throws"](TypeError, function () {
  Object.fromEntries(['ab']);
});