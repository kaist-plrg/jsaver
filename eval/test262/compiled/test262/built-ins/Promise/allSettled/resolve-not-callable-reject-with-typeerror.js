var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allSettled
description: >
  If the constructor's `resolve` method is not callable, reject with a TypeError.
info: |
  Let result be PerformPromiseAllSettled(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAllSettled

  Let promiseResolve be ? Get(constructor, "resolve").
  If ! IsCallable(promiseResolve) is false, throw a TypeError exception.

flags: [async]
features: [Promise.allSettled, arrow-function]
---*/
Promise.resolve = null;
Promise.allSettled([1]).then(function () {
  _newArrowCheck(this, _this);

  return $DONE('The promise should not be resolved.');
}.bind(this), function (error) {
  _newArrowCheck(this, _this);

  assert(error instanceof TypeError);
}.bind(this)).then($DONE, $DONE);