function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: RequireObjectCoercible for BigInt values
esid: pending
features: [BigInt]
---*/
try {
  var _ = 0n;

  _objectDestructuringEmpty(_);
} catch (e) {
  $ERROR('Expected RequireObjectCoercible to succeed for BigInt values');
}

assert.sameValue(Object.setPrototypeOf(0n, null), 0n);