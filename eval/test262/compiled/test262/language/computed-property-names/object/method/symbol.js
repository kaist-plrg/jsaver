var _object;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property method names can be a symbol
includes: [compareArray.js]
features: [Symbol]
---*/
function ID(x) {
  return x;
}

var sym1 = Symbol();
var sym2 = Symbol();
var object = (_object = {
  a: function a() {
    return 'A';
  }
}, _defineProperty(_object, sym1, function () {
  return 'B';
}), _defineProperty(_object, "c", function c() {
  return 'C';
}), _defineProperty(_object, ID(sym2), function () {
  return 'D';
}), _object);
assert.sameValue(object.a(), 'A', "`object.a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(object[sym1](), 'B', "`object[sym1]()` returns `'B'`. Defined as `[sym1]() { return 'B'; }`");
assert.sameValue(object.c(), 'C', "`object.c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(object[sym2](), 'D', "`object[sym2]()` returns `'D'`. Defined as `[ID(sym2)]() { return 'D'; }`");
assert(compareArray(Object.getOwnPropertyNames(object), ['a', 'c']), "`compareArray(Object.getOwnPropertyNames(object), ['a', 'c'])` returns `true`");
assert(compareArray(Object.getOwnPropertySymbols(object), [sym1, sym2]), "`compareArray(Object.getOwnPropertySymbols(object), [sym1, sym2])` returns `true`");