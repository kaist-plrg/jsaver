function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions declared as methods are assigned a `name` property according to
    the string value of their property name.
es6id: 14.3.8
includes: [propertyHelper.js]
features: [Symbol]
---*/
var m = Symbol('method');

var method = _defineProperty({}, m, function () {})[m];

assert.sameValue(method.name, '[method]');
verifyNotEnumerable(method, 'name');
verifyNotWritable(method, 'name');
verifyConfigurable(method, 'name');