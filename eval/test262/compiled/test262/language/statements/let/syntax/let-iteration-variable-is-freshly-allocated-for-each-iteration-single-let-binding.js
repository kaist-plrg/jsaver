// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    In a normal for statement the iteration variable is freshly allocated for each iteration. Single let binding
---*/
var a = [];

var _loop = function _loop(i) {
  a.push(function () {
    return i;
  });
};

for (var i = 0; i < 5; ++i) {
  _loop(i);
}

for (var j = 0; j < 5; ++j) {
  assert.sameValue(j, a[j]());
}