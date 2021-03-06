// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator uses ToNumber
es5id: 9.5_A3.1_T2
description: Type(x) is Number
---*/
// CHECK#1
if (new Number(1) << 0 !== 1) {
  $ERROR('#1: (new Number(1) << 0) === 1. Actual: ' + (new Number(1) << 0));
} // CHECK#2


if (-1.234 << 0 !== -1) {
  $ERROR('#2: (-1.234 << 0) === -1. Actual: ' + (-1.234 << 0));
}