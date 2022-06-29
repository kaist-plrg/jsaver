// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    outer let binding unchanged by for-loop let binding
---*/
//
var x = "outer_x";
var y = "outer_y";

for (var _x = "inner_x", i = 0; i < 1; i++) {
  var _y = "inner_y";
  assert.sameValue(_x, "inner_x");
  assert.sameValue(_y, "inner_y");
}

assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");