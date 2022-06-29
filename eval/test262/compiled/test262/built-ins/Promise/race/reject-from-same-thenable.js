function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiserace
description: >
  Promise.race does not prevent resolve from being called multiple times.
info: |
  PerformPromiseRace

  Repeat,
    Let next be IteratorStep(iteratorRecord).
    If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
    ReturnIfAbrupt(next).
    If next is false, then
      Set iteratorRecord.[[Done]] to true.
      Return resultCapability.[[Promise]].
    Let nextValue be IteratorValue(next).
    If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
    ReturnIfAbrupt(nextValue).
    Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).
    Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], resultCapability.[[Reject]] »).

includes: [promiseHelper.js]
---*/
var callCount = 0;
var sequence = [];

function Constructor(executor) {
  var _this = this;

  function reject(value) {
    callCount += 1;
    sequence.push(value);
  }

  executor(function () {
    _newArrowCheck(this, _this);

    throw new Test262Error();
  }.bind(this), reject);
}

Constructor.resolve = function (v) {
  return v;
};

var pReject;
var a = {
  then: function then(_, rejecter) {
    pReject = rejecter;
  }
};
assert.sameValue(callCount, 0, 'callCount before call to race()');
Promise.race.call(Constructor, [a]);
assert.sameValue(callCount, 0, 'callCount after call to race()');
pReject(1);
pReject(2);
pReject(3);
assert.sameValue(callCount, 3, 'callCount after resolving a');
assert.sameValue(sequence.length, 3);
checkSequence(sequence);