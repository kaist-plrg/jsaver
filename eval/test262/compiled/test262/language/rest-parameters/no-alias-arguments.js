// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.1
description: >
    no alias arguments
includes: [compareArray.js]
---*/
function f(a) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  arguments[0] = 1;
  assert.sameValue(a, 3, "The value of `a` is `3`");
  arguments[1] = 2;
  assert(compareArray(rest, [4, 5]), "`compareArray(rest, [4, 5])` returns `true`");
}

f(3, 4, 5);