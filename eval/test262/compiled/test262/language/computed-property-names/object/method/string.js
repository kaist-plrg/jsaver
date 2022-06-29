var _object;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property method names can be a string
includes: [compareArray.js]
---*/
function ID(x) {
  return x;
}

var object = (_object = {
  a: function a() {
    return 'A';
  }
}, _defineProperty(_object, 'b', function b() {
  return 'B';
}), _defineProperty(_object, "c", function c() {
  return 'C';
}), _defineProperty(_object, ID('d'), function () {
  return 'D';
}), _object);
assert.sameValue(object.a(), 'A', "`object.a()` returns `'A'`. Defined as `a() { return 'A'}`");
assert.sameValue(object.b(), 'B', "`object.b()` returns `'B'`. Defined as `['b']() { return 'B'; }`");
assert.sameValue(object.c(), 'C', "`object.c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(object.d(), 'D', "`object.d()` returns `'D'`. Defined as `[ID('d')]() { return 'D'; }`");
assert(compareArray(Object.getOwnPropertyNames(object), ['a', 'b', 'c', 'd']), "`compareArray(Object.getOwnPropertyNames(object), ['a', 'b', 'c', 'd'])` returns `true`");