function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2018 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.fromentries
description: Closes iterators when they return entries which are null.
info: |
  Object.fromEntries ( iterable )

  ...
  4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
  5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
  6. Return ? AddEntriesFromIterable(obj, iterable, adder).

  AddEntriesFromIterable ( target, iterable, adder )

  ...
  4. Repeat,
    ...
    d. If Type(nextItem) is not Object, then
      i. Let error be ThrowCompletion(a newly created TypeError object).
      ii. Return ? IteratorClose(iteratorRecord, error).

features: [Symbol.iterator, Object.fromEntries]
---*/
var returned = false;

var iterable = _defineProperty({}, Symbol.iterator, function () {
  var advanced = false;
  return {
    next: function next() {
      if (advanced) {
        throw new Test262Error('should only advance once');
      }

      advanced = true;
      return {
        done: false,
        value: null
      };
    },
    "return": function _return() {
      if (returned) {
        throw new Test262Error('should only return once');
      }

      returned = true;
    }
  };
});

assert.sameValue(_typeof(Object.fromEntries), 'function');
assert["throws"](TypeError, function () {
  Object.fromEntries(iterable);
});
assert(returned, 'iterator should be closed when entry is null');