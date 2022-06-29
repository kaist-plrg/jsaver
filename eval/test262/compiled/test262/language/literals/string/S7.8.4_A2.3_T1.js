// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Correct interpretation of DIGITS
es5id: 7.8.4_A2.3_T1
description: Check DIGITS
---*/
//CHECK#0-9
var unicode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (var index = 0; index <= 9; index++) {
  if (unicode[index] !== character[index]) {
    $ERROR('#' + character[index] + ' ');
  }
}