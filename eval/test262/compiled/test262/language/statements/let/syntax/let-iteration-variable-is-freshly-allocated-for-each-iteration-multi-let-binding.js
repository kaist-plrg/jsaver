// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    In a normal for statement the iteration variable is freshly allocated for each iteration. Multi let binding
---*/
var a = [],
    b = [];

var _loop = function _loop(i, j) {
  a.push(function () {
    return i;
  });
  b.push(function () {
    return j;
  });
};

for (var i = 0, j = 10; i < 5; ++i, ++j) {
  _loop(i, j);
}

for (var k = 0; k < 5; ++k) {
  assert.sameValue(k, a[k]());
  assert.sameValue(k + 10, b[k]());
}