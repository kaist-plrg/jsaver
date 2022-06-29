var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Reject when argument's Symbol.iterator returns string
info: |
    ...
    Let iteratorRecord be GetIterator(iterable).
    IfAbruptRejectPromise(iteratorRecord, promiseCapability).
    ...

    GetIterator ( obj [ , hint [ , method ] ] )

    ...
    Let iterator be ? Call(method, obj).
    If Type(iterator) is not Object, throw a TypeError exception.
    ...
features: [Promise.any, Symbol.iterator]
flags: [async]
---*/
var callCount = 0;
Promise.any(_defineProperty({}, Symbol.iterator, function () {
  callCount++;
  return '';
})).then(function () {
  _newArrowCheck(this, _this);

  $DONE('The promise should be rejected, but was resolved');
}.bind(this), function (error) {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'callCount === 1');
  assert(error instanceof TypeError);
}.bind(this)).then($DONE, $DONE);