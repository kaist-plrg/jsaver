// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator !x returns !ToBoolean(x)
es5id: 11.4.9_A3_T1
description: Type(x) is boolean primitive or Boolean object
---*/
//CHECK#1
if (!false !== true) {
  $ERROR('#1: !false === true');
} //CHECK#2


if (!new Boolean(true) !== false) {
  $ERROR('#2: !new Boolean(true) === false');
} //CHECK#3


if (!new Boolean(false) !== false) {
  $ERROR('#3: !new Boolean(false) === false');
}