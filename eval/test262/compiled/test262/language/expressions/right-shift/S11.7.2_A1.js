// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between ShiftExpression and ">>" or
    between ">>" and AdditiveExpression are allowed
es5id: 11.7.2_A1
description: Checking by using eval
---*/
//CHECK#1
if (eval("-4\t>>\t1") !== -2) {
  $ERROR("#1: -4\\u0009>>\\u00091 === -2");
} //CHECK#2


if (eval("-4\x0B>>\x0B1") !== -2) {
  $ERROR("#2: -4\\u000B>>\\u000B1 === -2");
} //CHECK#3


if (eval("-4\f>>\f1") !== -2) {
  $ERROR("#3: -4\\u000C>>\\u000C1 === -2");
} //CHECK#4


if (eval("-4 >> 1") !== -2) {
  $ERROR("#4: -4\\u0020>>\\u00201 === -2");
} //CHECK#5


if (eval("-4\xA0>>\xA01") !== -2) {
  $ERROR("#5: -4\\u00A0>>\\u00A01 === -2");
} //CHECK#6


if (eval("-4\n>>\n1") !== -2) {
  $ERROR("#6: -4\\u000A>>\\u000A1 === -2");
} //CHECK#7


if (eval("-4\r>>\r1") !== -2) {
  $ERROR("#7: -4\\u000D>>\\u000D1 === -2");
} //CHECK#8


if (eval("-4\u2028>>\u20281") !== -2) {
  $ERROR("#8: -4\\u2028>>\\u20281 === -2");
} //CHECK#9


if (eval("-4\u2029>>\u20291") !== -2) {
  $ERROR("#9: -4\\u2029>>\\u20291 === -2");
} //CHECK#10


if (eval("-4\t\x0B\f \xA0\n\r\u2028\u2029>>\t\x0B\f \xA0\n\r\u2028\u20291") !== -2) {
  $ERROR("#10: -4\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029>>\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291 === -2");
}