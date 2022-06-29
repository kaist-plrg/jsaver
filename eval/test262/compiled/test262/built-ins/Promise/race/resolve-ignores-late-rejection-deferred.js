var _this2 = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Resolved promises ignore rejections through deferred invocation of the
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
includes: [promiseHelper.js]
---*/
var sequence = [1];
var lateRejector = {
  then: function then(resolve, reject) {
    var _this = this;

    return new Promise(function (resolve) {
      _newArrowCheck(this, _this);

      sequence.push(3);
      resolve();
      sequence.push(4);
    }.bind(this)).then(function () {
      _newArrowCheck(this, _this);

      sequence.push(5);
      resolve(9);
      sequence.push(6);
      reject();
      sequence.push(7);
    }.bind(this));
  }
};
sequence.push(2);
Promise.race([lateRejector]).then(function (resolution) {
  _newArrowCheck(this, _this2);

  assert.sameValue(resolution, 9);
  assert.sameValue(sequence.length, 7);
  checkSequence(sequence);
}.bind(this)).then($DONE, $DONE);