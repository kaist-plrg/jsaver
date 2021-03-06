var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Promise.any(new Test262Error()) rejects with TypeError.
info: |
  Promise.any ( iterable )

  ...
  Let iteratorRecord be GetIterator(iterable).
  IfAbruptRejectPromise(iteratorRecord, promiseCapability).
  ...

  GetIterator ( obj [ , hint [ , method ] ] )

  ...
  Let iterator be ? Call(method, obj).
  If Type(iterator) is not Object, throw a TypeError exception.
  ...

  GetMethod

  2. Let func be ? GetV(V, P).
  3. If func is either undefined or null, return undefined.
  4. If IsCallable(func) is false, throw a TypeError exception.

  Call ( F, V [ , argumentsList ] )

  2. If IsCallable(F) is false, throw a TypeError exception.
features: [Promise.any]
flags: [async]
---*/
try {
  Promise.any(new Test262Error()).then(function () {
    _newArrowCheck(this, _this);

    $DONE('The promise should be rejected, but was resolved');
  }.bind(this), function (error) {
    _newArrowCheck(this, _this);

    assert(error instanceof TypeError);
  }.bind(this)).then($DONE, $DONE);
} catch (error) {
  $DONE("The promise should be rejected, but threw an exception: ".concat(error.message));
}