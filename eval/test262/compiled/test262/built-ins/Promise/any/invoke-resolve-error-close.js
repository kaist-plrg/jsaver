var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2019 Leo Balter, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Explicit iterator closing in response to error
esid: sec-promise.any
info: |
  5. Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).
  6. If result is an abrupt completion, then
    a. If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
    b. IfAbruptRejectPromise(result, promiseCapability).

  Runtime Semantics: PerformPromiseAny

  8. Repeat
    ...
    i. Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).
flags: [async]
features: [Promise.any, Symbol.iterator, computed-property-names, Symbol, arrow-function]
---*/
var error = new Test262Error();
var nextCount = 0;
var returnCount = 0;

var iter = _defineProperty({}, Symbol.iterator, function () {
  return {
    next: function next() {
      nextCount += 1;
      return {
        value: null,
        done: false
      };
    },
    "return": function _return() {
      returnCount += 1;
    }
  };
});

Promise.resolve = function () {
  throw error;
};

Promise.any(iter).then(function () {
  _newArrowCheck(this, _this);

  $DONE('The promise should be rejected, but was resolved');
}.bind(this), function (reason) {
  _newArrowCheck(this, _this);

  assert.sameValue(nextCount, 1);
  assert.sameValue(returnCount, 1);
  assert.sameValue(reason, error);
}.bind(this)).then($DONE, $DONE);