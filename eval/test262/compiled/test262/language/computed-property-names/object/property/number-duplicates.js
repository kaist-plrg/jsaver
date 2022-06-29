var _object;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property names can be numbers
---*/
var object = (_object = {}, _defineProperty(_object, 1.2, 'A'), _defineProperty(_object, 1e55, 'B'), _defineProperty(_object, 0.000001, 'C'), _defineProperty(_object, -0, 'D'), _defineProperty(_object, Infinity, 'E'), _defineProperty(_object, -Infinity, 'F'), _defineProperty(_object, NaN, 'G'), _object);
assert.sameValue(object['1.2'], 'A', "The value of `object['1.2']` is `'A'`. Defined as `[1.2]: 'A'`");
assert.sameValue(object['1e+55'], 'B', "The value of `object['1e+55']` is `'B'`. Defined as `[1e55]: 'B'`");
assert.sameValue(object['0.000001'], 'C', "The value of `object['0.000001']` is `'C'`. Defined as `[0.000001]: 'C'`");
assert.sameValue(object[0], 'D', "The value of `object[0]` is `'D'`. Defined as `[-0]: 'D'`");
assert.sameValue(object[Infinity], 'E', "The value of `object[Infinity]` is `'E'`. Defined as `[Infinity]: 'E'`");
assert.sameValue(object[-Infinity], 'F', "The value of `object[-Infinity]` is `'F'`. Defined as `[-Infinity]: 'F'`");
assert.sameValue(object[NaN], 'G', "The value of `object[NaN]` is `'G'`. Defined as `[NaN]: 'G'`");