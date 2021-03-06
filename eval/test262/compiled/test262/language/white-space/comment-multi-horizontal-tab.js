// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Multi line comment can contain HORIZONTAL TAB (U+0009)
es5id: 7.2_A4.1_T1
description: Use HORIZONTAL TAB(\u0009)
---*/
// CHECK#1
eval("/*\t multi line \t comment \t*/"); //CHECK#2

var x = 0;
eval("/*\t multi line \t comment \t x = 1;*/");

if (x !== 0) {
  $ERROR("#1: var x = 0; eval(\"/*\\u0009 multi line \\u0009 comment \\u0009 x = 1;*/\"); x === 0. Actual: " + x);
}