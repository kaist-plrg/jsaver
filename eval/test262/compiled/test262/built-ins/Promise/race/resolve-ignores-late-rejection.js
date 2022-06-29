var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Resolved promises ignore rejections through immediate invocation of the
    provided resolving function
esid: sec-promise.race
info: |
  Let result be PerformPromiseRace(iteratorRecord, C, promiseCapability, promiseResolve).

  PerformPromiseRace

  Repeat
    ...
    Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], resultCapability.[[Reject]] »).

flags: [async]
features: [arrow-function]
---*/
var resolver = {
  then: function then(resolve) {
    resolve(42);
  }
};
var lateRejector = {
  then: function then(resolve, reject) {
    resolve(33);
    reject();
  }
};
Promise.race([resolver, lateRejector]).then(function (resolution) {
  _newArrowCheck(this, _this);

  assert.sameValue(resolution, 42);
}.bind(this)).then($DONE, $DONE);