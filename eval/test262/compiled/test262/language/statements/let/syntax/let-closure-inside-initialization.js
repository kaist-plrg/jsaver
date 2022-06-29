// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    let: closure inside for loop initialization
---*/
var a = [];

for (var i = 0, f = function f() {
  return i;
}; i < 5; ++i) {
  a.push(f);
}

for (var k = 0; k < 5; ++k) {
  assert.sameValue(0, a[k]());
}