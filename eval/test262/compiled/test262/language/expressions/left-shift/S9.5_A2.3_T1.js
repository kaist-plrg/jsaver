// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If result is greater than or equal to 2^31, return result -2^32
es5id: 9.5_A2.3_T1
description: Use operator <<0
---*/
// CHECK#1
if (2147483647 << 0 !== 2147483647) {
  $ERROR('#1: (2147483647 << 0) === 2147483647. Actual: ' + (2147483647 << 0));
} // CHECK#2


if (2147483648 << 0 !== -2147483648) {
  $ERROR('#2: (2147483648 << 0) === -2147483648. Actual: ' + (2147483648 << 0));
} // CHECK#3


if (2147483649 << 0 !== -2147483647) {
  $ERROR('#3: (2147483649 << 0) === -2147483647. Actual: ' + (2147483649 << 0));
} // CHECK#4


if (4294967295 << 0 !== -1) {
  $ERROR('#4: (4294967295 << 0) === -1. Actual: ' + (4294967295 << 0));
} // CHECK#5


if (4294967296 << 0 !== 0) {
  $ERROR('#5: (4294967296 << 0) === 0. Actual: ' + (4294967296 << 0));
} // CHECK#6


if (4294967297 << 0 !== 1) {
  $ERROR('#6: (4294967297 << 0) === 1. Actual: ' + (4294967297 << 0));
}