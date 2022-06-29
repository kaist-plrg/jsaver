function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
 Set has a property at `Symbol.species`
esid: sec-get-set-@@species
author: Sam Mikes
description: Set[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/
var desc = Object.getOwnPropertyDescriptor(Set, Symbol.species);
assert.sameValue(desc.set, undefined);
assert.sameValue(_typeof(desc.get), 'function');
verifyNotWritable(Set, Symbol.species, Symbol.species);
verifyNotEnumerable(Set, Symbol.species);
verifyConfigurable(Set, Symbol.species);