// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: SPACE (U+0020) may occur within strings
es5id: 7.2_A2.4_T2
description: Use real SPACE
---*/
//CHECK#1
if (" str ing " !== " str ing ") {
  $ERROR("#1: \" str ing \" === \"\\u0020str\\u0020ing\\u0020\"");
}