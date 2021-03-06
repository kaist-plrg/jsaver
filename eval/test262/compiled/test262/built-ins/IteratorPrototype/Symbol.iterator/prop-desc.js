function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.1.2.1
description: Property descriptor
info: |
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
features: [Symbol.iterator]
includes: [propertyHelper.js]
---*/
var IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
assert.sameValue(_typeof(IteratorPrototype[Symbol.iterator]), 'function');
verifyNotEnumerable(IteratorPrototype, Symbol.iterator);
verifyWritable(IteratorPrototype, Symbol.iterator);
verifyConfigurable(IteratorPrototype, Symbol.iterator);