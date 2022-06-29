// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    x before continue
---*/
do {
  var x = 4;
  assert.sameValue(x, 4);
  {
    var _x = 5;
    assert.sameValue(_x, 5);
    continue;
    assert(false);
  }
} while (false);