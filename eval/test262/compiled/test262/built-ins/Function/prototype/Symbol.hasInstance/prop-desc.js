function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.2.3.6
description: Function.prototype[Symbol.hasInstance] property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
features: [Symbol.hasInstance]
includes: [propertyHelper.js]
---*/
assert.sameValue(_typeof(Function.prototype[Symbol.hasInstance]), 'function');
verifyNotEnumerable(Function.prototype, Symbol.hasInstance);
verifyNotWritable(Function.prototype, Symbol.hasInstance);
verifyNotConfigurable(Function.prototype, Symbol.hasInstance);