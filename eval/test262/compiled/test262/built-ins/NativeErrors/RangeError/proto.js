// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.5.6.2
description: >
  The prototype of RangeError is Error.
info: |
  The value of the [[Prototype]] internal slot of a NativeError constructor is the intrinsic object %Error% (19.5.1).
---*/
assert.sameValue(Object.getPrototypeOf(RangeError), Error);