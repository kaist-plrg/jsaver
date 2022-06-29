var _this3 = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Iterator is not closed when the "resolve" capability returns an abrupt
  completion.
info: |
  Let C be the this value.
  Let promiseCapability be ? NewPromiseCapability(C).
  Let iteratorRecord be GetIterator(iterable).
  IfAbruptRejectPromise(iteratorRecord, promiseCapability).
  Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).
  If result is an abrupt completion, then
    If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
    IfAbruptRejectPromise(result, promiseCapability).
  Return Completion(result).

features: [Promise.any, Symbol.iterator]
flags: [async]
---*/
var callCount = 0;
var thrown = new Test262Error();

function P(executor) {
  var _this = this;

  callCount++;
  return new Promise(function (_, reject) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    callCount++;
    executor(function () {
      _newArrowCheck(this, _this2);

      callCount++;
      throw thrown;
    }.bind(this), function () {
      callCount++;
      reject.apply(void 0, arguments);
    });
  }.bind(this));
}

;
P.resolve = Promise.resolve;
Promise.any.call(P, [1]).then(function () {
  _newArrowCheck(this, _this3);

  $DONE('Promise incorrectly fulfilled.');
}.bind(this), function (error) {
  _newArrowCheck(this, _this3);

  // The error was not the result of promise
  // resolution, so will not be an AggregateError
  assert.sameValue(thrown, error);
  assert.sameValue(callCount, 6);
}.bind(this)).then($DONE, $DONE);