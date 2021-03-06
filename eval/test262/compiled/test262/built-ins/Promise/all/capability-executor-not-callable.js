// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.4.1
description: >
  Throws a TypeError if either resolve or reject capability is not callable.
info: |
  Promise.all ( iterable )

  ...
  6. Let promiseCapability be NewPromiseCapability(C).
  7. ReturnIfAbrupt(promiseCapability).
  ...

  25.4.1.5 NewPromiseCapability ( C )
    ...
    4. Let executor be a new built-in function object as defined in GetCapabilitiesExecutor Functions (25.4.1.5.1).
    5. Set the [[Capability]] internal slot of executor to promiseCapability.
    6. Let promise be Construct(C, «executor»).
    7. ReturnIfAbrupt(promise).
    8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
    9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
    ...
---*/
var checkPoint = "";

function fn1(executor) {
  checkPoint += "a";
}

Object.defineProperty(fn1, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn1, []);
}, "executor not called at all");
assert.sameValue(checkPoint, "a", "executor not called at all");
checkPoint = "";

function fn2(executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
}

Object.defineProperty(fn2, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn2, []);
}, "executor called with no arguments");
assert.sameValue(checkPoint, "ab", "executor called with no arguments");
checkPoint = "";

function fn3(executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
}

Object.defineProperty(fn3, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn3, []);
}, "executor called with (undefined, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, undefined)");
checkPoint = "";

function fn4(executor) {
  checkPoint += "a";
  executor(undefined, function () {});
  checkPoint += "b";
}

Object.defineProperty(fn4, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn4, []);
}, "executor called with (undefined, function)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, function)");
checkPoint = "";

function fn5(executor) {
  checkPoint += "a";
  executor(function () {}, undefined);
  checkPoint += "b";
}

Object.defineProperty(fn5, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn5, []);
}, "executor called with (function, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (function, undefined)");
checkPoint = "";

function fn6(executor) {
  checkPoint += "a";
  executor(123, "invalid value");
  checkPoint += "b";
}

Object.defineProperty(fn6, 'resolve', {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](TypeError, function () {
  Promise.all.call(fn6, []);
}, "executor called with (Number, String)");
assert.sameValue(checkPoint, "ab", "executor called with (Number, String)");