// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    return from block
---*/
function fn() {
  var u = 3;
  {
    var v = 6;
    return u + v;
  }
}

assert.sameValue(fn(), 9);