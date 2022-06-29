var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Error when accessing an iterator result's `value` property (rejecting
  promise)
info: |
  Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).
  If result is an abrupt completion, then
    If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
    IfAbruptRejectPromise(result, promiseCapability).

  ...

  Runtime Semantics: PerformPromiseAny

  ...
  Repeat
    Let nextValue be IteratorValue(next).
    If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
    ReturnIfAbrupt(nextValue).

features: [Promise.any, Symbol.iterator]
flags: [async]
---*/
var callCount = 0;
var error = new Test262Error();
var poisoned = {
  done: false
};
Object.defineProperty(poisoned, 'value', {
  get: function get() {
    callCount++;
    throw error;
  }
});

var iterNextValThrows = _defineProperty({}, Symbol.iterator, function () {
  callCount++;
  return {
    next: function next() {
      callCount++;
      return poisoned;
    }
  };
});

Promise.any(iterNextValThrows).then(function () {
  _newArrowCheck(this, _this);

  $DONE('The promise should be rejected, but was resolved');
}.bind(this), function (reason) {
  _newArrowCheck(this, _this);

  assert(error instanceof Test262Error);
  assert.sameValue(reason, error);
  assert.sameValue(callCount, 3, 'callCount === 3');
}.bind(this)).then($DONE, $DONE);