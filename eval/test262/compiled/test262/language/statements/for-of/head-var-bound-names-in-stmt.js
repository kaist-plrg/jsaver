// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The body may re-declare variables declared in the head
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/
var iterCount = 0;

for (var _i = 0, _arr = [99]; _i < _arr.length; _i++) {
  var x = _arr[_i];
  var x;
  assert.sameValue(x, 99);
  iterCount += 1;
}

assert.sameValue(iterCount, 1);