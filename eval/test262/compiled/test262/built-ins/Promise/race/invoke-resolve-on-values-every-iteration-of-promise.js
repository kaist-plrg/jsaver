var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Invocation of the constructor's `resolve` method for iterable with non-promise values
esid: sec-promise.race
info: |
  Let result be PerformPromiseRace(iteratorRecord, C, promiseCapability, promiseResolve).

  PerformPromiseRace

  Repeat
    ...
    i. Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).

flags: [async]
features: [arrow-function]
---*/
var values = [1, 2, 3];
var callCount = 0;
var boundPromiseResolve = Promise.resolve.bind(Promise);

Promise.resolve = function () {
  callCount += 1;
  return boundPromiseResolve.apply(void 0, arguments);
};

Promise.race(values).then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 3, '`Promise.resolve` invoked once for every item in iterable arg');
}.bind(this)).then($DONE, $DONE);