// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.12
description: >
    labeled continue
---*/
var count = 0;

label: for (var x = 0; x < 10;) {
  while (true) {
    x++;
    count++;
    continue label;
  }
}

assert.sameValue(count, 10, "The value of `count` is `10`");