// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.resolve` invoked on a non-object value
es6id: 25.4.4.5
info: |
    1. Let C be the this value.
    2. If Type(C) is not Object, throw a TypeError exception.
features: [Symbol]
---*/
assert["throws"](TypeError, function () {
  Promise.resolve.call(undefined, []);
});
assert["throws"](TypeError, function () {
  Promise.resolve.call(null, []);
});
assert["throws"](TypeError, function () {
  Promise.resolve.call(86, []);
});
assert["throws"](TypeError, function () {
  Promise.resolve.call('string', []);
});
assert["throws"](TypeError, function () {
  Promise.resolve.call(true, []);
});
assert["throws"](TypeError, function () {
  Promise.resolve.call(Symbol(), []);
});