// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    x after break to label
---*/
{
  var x = 2;

  L: {
    var _x = 3;
    assert.sameValue(_x, 3);
    break L;
    assert(false);
  }

  assert.sameValue(x, 2);
}