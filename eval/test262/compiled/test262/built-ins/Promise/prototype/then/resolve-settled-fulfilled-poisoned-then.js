// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Resolving with an object with a "poisoned" `then` property from a fulfilled promise
es6id: 25.4.5.3
info: |
    [...]
    7. Return PerformPromiseThen(promise, onFulfilled, onRejected,
       resultCapability).

    25.4.5.3.1 PerformPromiseThen
    [...]
    8. Else if the value of promise's [[PromiseState]] internal slot is
       "fulfilled",
       a. Let value be the value of promise's [[PromiseResult]] internal slot.
       b. EnqueueJob("PromiseJobs", PromiseReactionJob, «fulfillReaction,
          value»).

    25.4.2.1 PromiseReactionJob
    [...]
    8. Let status be Call(promiseCapability.[[Resolve]], undefined,
       «handlerResult.[[value]]»).
    [...]

    25.4.1.3.2 Promise Resolve Functions
    [...]
    8. Let then be Get(resolution, "then").
    9. If then is an abrupt completion, then
       a. Return RejectPromise(promise, then.[[value]]).
flags: [async]
---*/
var value = {};
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function get() {
    throw value;
  }
});
var p1 = new Promise(function (resolve) {
  resolve();
});
var p2;
p2 = p1.then(function () {
  return poisonedThen;
});
p2.then(function (x) {
  $DONE('The promise should not be fulfilled.');
}, function (x) {
  if (x !== value) {
    $DONE('The promise should be rejected with the thrown exception.');
    return;
  }

  $DONE();
});