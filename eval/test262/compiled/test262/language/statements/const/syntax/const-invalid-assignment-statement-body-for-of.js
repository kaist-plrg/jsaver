// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.10_S1.a.i
description: >
    const: invalid assignment in Statement body
---*/
assert["throws"](TypeError, function () {
  for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
    var x = _arr[_i];
    x++;
  }
});