// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.1
description: >
    dynamic lookup from closure
---*/
function fn(one) {
  var x = one + 1;
  var y = one + 2;
  var u = one + 4;
  {
    var f = function f() {
      assert.sameValue(one, 1);
      assert.sameValue(x, 2);
      assert.sameValue(y, 3);
      assert.sameValue(z, 4);
      assert.sameValue(u, 5);
      assert.sameValue(v, 6);
    };

    var z = one + 3;
    var v = one + 5;
    f();
  }
}

fn(1);