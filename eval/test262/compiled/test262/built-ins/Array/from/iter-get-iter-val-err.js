// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.from
description: Error retrieving value of iterator result
info: |
    [...]
    6. If usingIterator is not undefined, then
       [...]
       g. Repeat
          [...]
          v. Let nextValue be IteratorValue(next).
          vi. ReturnIfAbrupt(nextValue).
features: [Symbol.iterator]
---*/
var items = {};
var poisonedValue = {};
Object.defineProperty(poisonedValue, 'value', {
  get: function get() {
    throw new Test262Error();
  }
});

items[Symbol.iterator] = function () {
  return {
    next: function next() {
      return poisonedValue;
    }
  };
};

assert["throws"](Test262Error, function () {
  Array.from(items);
});