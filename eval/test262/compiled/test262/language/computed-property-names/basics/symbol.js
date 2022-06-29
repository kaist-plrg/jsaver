var _object;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property names can be a symbol
includes: [compareArray.js]
features: [Symbol]
---*/
function ID(x) {
  return x;
}

var sym1 = Symbol();
var sym2 = Symbol();
var object = (_object = {
  a: 'A'
}, _defineProperty(_object, sym1, 'B'), _defineProperty(_object, "c", 'C'), _defineProperty(_object, ID(sym2), 'D'), _object);
assert.sameValue(object.a, 'A', "The value of `object.a` is `'A'`. Defined in `object` as `a: 'A'`");
assert.sameValue(object[sym1], 'B', "The value of `object[sym1]` is `'B'`. Defined in `object` as `[sym1]: 'B'`");
assert.sameValue(object.c, 'C', "The value of `object.c` is `'C'`. Defined in `object` as `c: 'C'`");
assert.sameValue(object[sym2], 'D', "The value of `object[sym2]` is `'D'`. Defined in `object` as `[ID(sym2)]: 'D'`");
assert(compareArray(Object.getOwnPropertyNames(object), ['a', 'c']), "`compareArray(Object.getOwnPropertyNames(object), ['a', 'c'])` returns `true`");
assert(compareArray(Object.getOwnPropertySymbols(object), [sym1, sym2]), "`compareArray(Object.getOwnPropertySymbols(object), [sym1, sym2])` returns `true`");