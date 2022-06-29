var _loop = function _loop() {
  var r = _arr[_i];
  assert["throws"](RangeError, function () {
    0n.toString(r);
  }, "0, radix " + r);
  assert["throws"](RangeError, function () {
    (-1n).toString(r);
  }, "-1, radix " + r);
  assert["throws"](RangeError, function () {
    1n.toString(r);
  }, "1, radix " + r);
};

// Copyright 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: toString with invalid radix
info: |
  BigInt.prototype.toString ( [ radix ] )

  [...]
  4. Else, let radixNumber be ? ToInteger(radix).
  5. If radixNumber < 2 or radixNumber > 36, throw a RangeError
     exception.
features: [BigInt]
---*/
for (var _i = 0, _arr = [0, 1, 37, null]; _i < _arr.length; _i++) {
  _loop();
}