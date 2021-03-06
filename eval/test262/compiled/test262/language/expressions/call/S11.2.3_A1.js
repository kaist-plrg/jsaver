// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between MemberExpression and Arguments
    are allowed
es5id: 11.2.3_A1
description: Checking by using eval
---*/
//CHECK#1
if (eval("Number\t()") !== 0) {
  $ERROR("#1: Number\\u0009() === 0");
} //CHECK#2


if (eval("Number\x0B()") !== 0) {
  $ERROR("#2: Number\\u000B() === 0");
} //CHECK#3


if (eval("Number\f()") !== 0) {
  $ERROR("#3: Number\\u000C() === 0");
} //CHECK#4


if (eval("Number ()") !== 0) {
  $ERROR("#4: Number\\u0020 === 0");
} //CHECK#5


if (eval("Number\xA0()") !== 0) {
  $ERROR("#5: Number\\u00A0() === 0");
} //CHECK#6


if (eval("Number\n()") !== 0) {
  $ERROR("#6: Number\\u000A() === 0");
} //CHECK#7


if (eval("Number\r()") !== 0) {
  $ERROR("#7: Number\\u000D() === 0");
} //CHECK#8


if (eval("Number\u2028()") !== 0) {
  $ERROR("#8: Number\\u2028() === 0");
} //CHECK#9


if (eval("Number\u2029()") !== 0) {
  $ERROR("#9: Number\\u2029() === 0");
} //CHECK#10


if (eval("Number\t\x0B\f \xA0\n\r\u2028\u2029()") !== 0) {
  $ERROR("#10: Number\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029() === 0");
}