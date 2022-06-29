var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2019 Leo Balter, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Error when advancing the provided iterable (not closing iterator)
info: |
  Promise.any ( iterable )

  5. Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).
  6. If result is an abrupt completion, then
    a. If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
    b. IfAbruptRejectPromise(result, promiseCapability).

  Runtime Semantics: PerformPromiseAny

  8. Repeat
    a. Let next be IteratorStep(iteratorRecord).
    b. If next is an abrupt completion, set iteratorRecord.[[done]] to true.
    c. ReturnIfAbrupt(next).

flags: [async]
features: [Promise.any, Symbol.iterator, computed-property-names, Symbol, arrow-function]
---*/
var returnCount = 0;
var poisonedDone = {};
var error = new Test262Error();
Object.defineProperties(poisonedDone, {
  done: {
    get: function get() {
      throw error;
    }
  },
  value: {
    get: function get() {}
  }
});

var iterStepThrows = _defineProperty({}, Symbol.iterator, function () {
  return {
    next: function next() {
      return poisonedDone;
    },
    "return": function _return() {
      returnCount += 1;
      return {};
    }
  };
});

Promise.any(iterStepThrows).then(function () {
  _newArrowCheck(this, _this);

  $DONE('The promise should be rejected.');
}.bind(this), function (reason) {
  _newArrowCheck(this, _this);

  assert.sameValue(reason, error);
  assert.sameValue(returnCount, 0);
}.bind(this)).then($DONE, $DONE);