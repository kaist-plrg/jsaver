// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x < y returns ToNumber(x) < ToNumber(y)
es5id: 11.8.1_A3.1_T2.8
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Undefined
---*/
//CHECK#1
if (true < undefined !== false) {
  $ERROR('#1: true < undefined === false');
} //CHECK#2


if (undefined < true !== false) {
  $ERROR('#2: undefined < true === false');
} //CHECK#3


if (new Boolean(true) < undefined !== false) {
  $ERROR('#3: new Boolean(true) < undefined === false');
} //CHECK#4


if (undefined < new Boolean(true) !== false) {
  $ERROR('#4: undefined < new Boolean(true) === false');
}