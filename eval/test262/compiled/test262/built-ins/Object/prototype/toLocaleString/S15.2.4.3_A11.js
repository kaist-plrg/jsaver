// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the toLocaleString method is 0
es5id: 15.2.4.3_A11
description: Checking the Object.prototype.toLocaleString.length
---*/
//CHECK#1
if (!Object.prototype.toLocaleString.hasOwnProperty("length")) {
  $ERROR('#1: The length property of the toLocaleString method is 0');
} //CHECK#2


if (Object.prototype.toLocaleString.length !== 0) {
  $ERROR('#2: The length property of the toLocaleString method is 0');
}