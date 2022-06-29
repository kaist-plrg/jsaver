function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
 Array has a property at `Symbol.species`
esid: sec-get-array-@@species
author: Sam Mikes
description: Array[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/
var desc = Object.getOwnPropertyDescriptor(Array, Symbol.species);
assert.sameValue(desc.set, undefined);
assert.sameValue(_typeof(desc.get), 'function');
verifyNotWritable(Array, Symbol.species, Symbol.species);
verifyNotEnumerable(Array, Symbol.species);
verifyConfigurable(Array, Symbol.species);