function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Test the descriptor of Symbol.prototype.description.
info: |
    `Symbol.prototype.description` is an accessor property whose
    set accessor function is undefined.
includes: [propertyHelper.js]
features: [Symbol.prototype.description]
---*/
var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');
assert.sameValue(desc.set, undefined, 'The value of desc.set is `undefined`');
assert.sameValue(desc.writable, undefined, 'The value of desc.writable is `undefined`');
assert.sameValue(_typeof(desc.get), 'function', 'The value of `typeof desc.get` is "function"');
verifyProperty(Symbol.prototype, 'description', {
  enumerable: false,
  configurable: true
});