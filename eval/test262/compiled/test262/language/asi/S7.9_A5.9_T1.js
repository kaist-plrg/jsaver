// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Additive/Substract Operator(A/SO) in combination with itself separated by LT or white spaces
    after automatic semicolon insertion gives valid result
es5id: 7.9_A5.9_T1
description: >
    Try use Variable1 (different combinations of three +) Variable2
    construction
---*/
var x = 1,
    y = 1;
var z = x + + +y; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (z !== 2 && y !== 1 && x !== 1) {
  $ERROR('#1: ');
} //
//////////////////////////////////////////////////////////////////////////////


z = x + + +y; //////////////////////////////////////////////////////////////////////////////
//CHECK#2

if (z !== 2 && y !== 1 && x !== 1) {
  $ERROR('');
} //
//////////////////////////////////////////////////////////////////////////////


z = x + + + +y; //////////////////////////////////////////////////////////////////////////////
//CHECK#3

if (z !== 2 && y !== 1 && x !== 1) {
  $ERROR('');
} //
//////////////////////////////////////////////////////////////////////////////