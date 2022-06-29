// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    outer const binding unchanged by for-loop const binding
---*/
//
var x = "outer_x";
var y = "outer_y";
var i = 0;

for (var _x = "inner_x"; i < 1; i++) {
  var _y = "inner_y";
  assert.sameValue(_x, "inner_x");
  assert.sameValue(_y, "inner_y");
}

assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");