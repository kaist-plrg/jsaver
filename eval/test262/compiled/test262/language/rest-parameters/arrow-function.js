// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.1
description: >
    arrow functions
includes: [compareArray.js]
---*/
var fn = function fn(a, b) {
  for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    c[_key - 2] = arguments[_key];
  }

  return c;
};

assert(compareArray(fn(), []), "`compareArray(fn(), [])` returns `true`");
assert(compareArray(fn(1, 2), []), "`compareArray(fn(1, 2), [])` returns `true`");
assert(compareArray(fn(1, 2, 3), [3]), "`compareArray(fn(1, 2, 3), [3])` returns `true`");
assert(compareArray(fn(1, 2, 3, 4), [3, 4]), "`compareArray(fn(1, 2, 3, 4), [3, 4])` returns `true`");
assert(compareArray(fn(1, 2, 3, 4, 5), [3, 4, 5]), "`compareArray(fn(1, 2, 3, 4, 5), [3, 4, 5])` returns `true`");
assert(compareArray(function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
}(), []), "`compareArray(((...args) => args)(), [])` returns `true`");
assert(compareArray(function () {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args;
}(1, 2, 3), [1, 2, 3]), "`compareArray(((...args) => args)(1,2,3), [1,2,3])` returns `true`");