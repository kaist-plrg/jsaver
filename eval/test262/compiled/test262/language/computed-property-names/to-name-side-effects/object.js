var _object;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    to name, accessor side effects object literal
includes: [compareArray.js]
---*/
var counter = 0;
var key1 = {
  toString: function toString() {
    assert.sameValue(counter++, 0, "The result of `counter++` is `0`");
    return 'b';
  }
};
var key2 = {
  toString: function toString() {
    assert.sameValue(counter++, 1, "The result of `counter++` is `1`");
    return 'd';
  }
};
var object = (_object = {
  a: function a() {
    return 'A';
  }
}, _defineProperty(_object, key1, function () {
  return 'B';
}), _defineProperty(_object, "c", function c() {
  return 'C';
}), _defineProperty(_object, key2, function () {
  return 'D';
}), _object);
assert.sameValue(counter, 2, "The value of `counter` is `2`");
assert.sameValue(object.a(), 'A', "`object.a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(object.b(), 'B', "`object.b()` returns `'B'`. Defined as `[key1]() { return 'B'; }`");
assert.sameValue(object.c(), 'C', "`object.c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(object.d(), 'D', "`object.d()` returns `'D'`. Defined as `[key2]() { return 'D'; }`");
assert(compareArray(Object.getOwnPropertyNames(object), ['a', 'b', 'c', 'd']), "`compareArray(Object.getOwnPropertyNames(object), ['a', 'b', 'c', 'd'])` returns `true`");