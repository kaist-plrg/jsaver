function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-map-objects
description: >
  Throws a TypeError if the iterator of the iterable is undefined.
info: |
  Map ( [ iterable ] )
  ...
  9. Let iteratorRecord be ? GetIterator(iterable).
features: [Symbol.iterator]
---*/
var iterable = _defineProperty({}, Symbol.iterator, undefined);

assert["throws"](TypeError, function () {
  new Map(iterable);
});