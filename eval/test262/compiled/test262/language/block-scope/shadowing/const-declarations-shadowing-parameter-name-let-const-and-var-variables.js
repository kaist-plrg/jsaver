// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    const declarations shadowing parameter name, let, const and var variables
---*/
function fn(a) {
  var b = 1;
  var c = 1;
  var d = 1;
  {
    var _a = 2;
    var _b = 2;
    var _c = 2;
    var _d = 2;
    assert.sameValue(_a, 2);
    assert.sameValue(_b, 2);
    assert.sameValue(_c, 2);
    assert.sameValue(_d, 2);
  }
  assert.sameValue(a, 1);
  assert.sameValue(b, 1);
  assert.sameValue(c, 1);
  assert.sameValue(d, 1);
}

fn(1);