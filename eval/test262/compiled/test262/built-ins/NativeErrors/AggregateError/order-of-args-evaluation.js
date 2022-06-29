function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error
description: >
  Process arguments in superclass-then-subclass order
info: |
  AggregateError ( errors, message )

  TODO: get updated prose

features: [AggregateError, Symbol.iterator]
includes: [promiseHelper.js]
---*/
var sequence = [];
var message = {
  toString: function toString() {
    sequence.push(1);
    return '';
  }
};

var errors = _defineProperty({}, Symbol.iterator, function () {
  sequence.push(2);
  return {
    next: function next() {
      sequence.push(3);
      return {
        done: true
      };
    }
  };
});

new AggregateError(errors, message);
assert.sameValue(sequence.length, 3);
checkSequence(sequence);