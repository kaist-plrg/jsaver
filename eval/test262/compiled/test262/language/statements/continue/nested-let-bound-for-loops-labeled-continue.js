// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.12
description: >
    nested let bound for loops labeled continue
---*/
var count = 0;

outer: for (var x = 0; x < 10;) {
  x++;

  for (var y = 0; y < 2;) {
    y++;
    count++;
    if (y == 2) continue outer;
  }
}

assert.sameValue(count, 20, "The value of `count` is `20`");