function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2018 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.fromentries
description: Does not close iterators with an uncallable `next` property.
info: |
  Object.fromEntries ( iterable )

  ...
  4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
  5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
  6. Return ? AddEntriesFromIterable(obj, iterable, adder).

  AddEntriesFromIterable ( target, iterable, adder )

  ...
  4. Repeat,
    a. Let next be ? IteratorStep(iteratorRecord).


  IteratorStep ( iteratorRecord )

  1. Let result be ? IteratorNext(iteratorRecord).
features: [Symbol.iterator, Object.fromEntries]
---*/
var iterable = _defineProperty({}, Symbol.iterator, function () {
  return {
    next: null,
    "return": function _return() {
      throw new Test262Error('should not call return');
    }
  };
});

assert.sameValue(_typeof(Object.fromEntries), 'function');
assert["throws"](TypeError, function () {
  Object.fromEntries(iterable);
});