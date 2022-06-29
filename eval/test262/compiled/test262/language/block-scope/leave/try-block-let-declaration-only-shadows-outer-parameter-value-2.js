// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    try block let declaration only shadows outer parameter value 2
---*/
(function (x) {
  try {
    var _x = 'middle';
    {
      var _x2 = 'inner';
      throw 0;
    }
  } catch (e) {
    assert.sameValue(x, 'outer');
  }
})('outer');