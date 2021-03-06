// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Unicode characters in variable Identifier are allowed
es5id: 12.2_A4
description: Create and use unicode characters in variable Identifier
---*/
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  __var = __var;
} catch (e) {
  $ERROR('#1: Unicode characters in variable Identifier allowed');
} //
//////////////////////////////////////////////////////////////////////////////


var __var = 1; //////////////////////////////////////////////////////////////////////////////
//CHECK#2

if (__var !== 1) {
  $ERROR('#2: __var === 1. Actual:  __var ===' + __var);
} //
//////////////////////////////////////////////////////////////////////////////