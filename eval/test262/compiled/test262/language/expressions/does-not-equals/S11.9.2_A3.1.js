// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Return false, if x and y are both true or both false; otherwise, return
    true
es5id: 11.9.2_A3.1
description: x and y are boolean primitives
---*/
//CHECK#1
if (true != true !== false) {
  $ERROR('#1: (true != true) === false');
} //CHECK#2


if (false != false !== false) {
  $ERROR('#2: (false != false) === false');
} //CHECK#3


if (true != false !== true) {
  $ERROR('#3: (true != false) === true');
} //CHECK#4


if (false != true !== true) {
  $ERROR('#4: (false != true) === true');
}