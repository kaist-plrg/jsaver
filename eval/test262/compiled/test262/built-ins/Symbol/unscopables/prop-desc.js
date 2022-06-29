function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.4.2.14
description: >
    `Symbol.unscopables` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.unscopables]
---*/
assert.sameValue(_typeof(Symbol.unscopables), 'symbol');
verifyNotEnumerable(Symbol, 'unscopables');
verifyNotWritable(Symbol, 'unscopables');
verifyNotConfigurable(Symbol, 'unscopables');