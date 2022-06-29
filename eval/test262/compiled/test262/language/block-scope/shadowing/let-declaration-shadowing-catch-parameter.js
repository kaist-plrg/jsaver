// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    let declaration shadowing catch parameter
---*/
try {
  throw 'stuff1';
} catch (a) {
  {
    // let declaration shadowing catch parameter
    var _a = 3;
    assert.sameValue(_a, 3);
  }
  assert.sameValue(a, 'stuff1');
}