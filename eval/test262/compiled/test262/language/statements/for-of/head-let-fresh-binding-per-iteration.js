// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.6.4.13
description: >
    let ForDeclaration: creates a fresh binding per iteration
---*/
var s = 0;
var f = [undefined, undefined, undefined];

var _loop = function _loop() {
  var x = _arr[_i];
  s += x;

  f[x - 1] = function () {
    return x;
  };
};

for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
  _loop();
}

assert.sameValue(s, 6, "The value of `s` is `6`");
assert.sameValue(f[0](), 1, "`f[0]()` returns `1`");
assert.sameValue(f[1](), 2, "`f[1]()` returns `2`");
assert.sameValue(f[2](), 3, "`f[2]()` returns `3`");