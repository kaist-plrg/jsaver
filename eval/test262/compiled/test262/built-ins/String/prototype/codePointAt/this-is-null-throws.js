// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.1.3.3
description: >
  Throws TypeError when `this` is null
info: |
  21.1.3.3 String.prototype.codePointAt ( pos )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
---*/
assert["throws"](TypeError, function () {
  String.prototype.codePointAt.call(null, 1);
});