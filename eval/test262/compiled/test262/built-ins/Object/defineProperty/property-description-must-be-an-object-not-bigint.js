var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.defineproperty
description: >
  Property description must be an object (bigint)
info: |
  Object.defineProperty ( O, P, Attributes )

  ...
  Let desc be ? ToPropertyDescriptor(Attributes).
  ...

  ToPropertyDescriptor ( Obj )

  If Type(Obj) is not Object, throw a TypeError exception.
  ...
features: [BigInt]
---*/
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Object.defineProperty({}, 'a', 0n);
}.bind(this));