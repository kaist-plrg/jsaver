// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: White Space and Line Terminator inside "grouping" operator are allowed
es5id: 11.1.6_A1
description: >
    Inserting WhiteSpaces and LineTerminators into grouping operator.
    Eval is used
---*/
//CHECK#1
if (eval("(\t1\t)") !== 1) {
  $ERROR("#1: (\\u00091\\u0009) === 1");
} //CHECK#2


if (eval("(\x0B1\x0B)") !== 1) {
  $ERROR("#2: (\\u000B1\\u000B) === 1");
} //CHECK#3


if (eval("(\f1\f)") !== 1) {
  $ERROR("#3: (\\u000C1\\u000C) === 1");
} //CHECK#4


if (eval("( 1 )") !== 1) {
  $ERROR("#4: (\\u00201\\u0020 === 1");
} //CHECK#5


if (eval("(\xA01\xA0)") !== 1) {
  $ERROR("#5: (\\u00A01\\u00A0) === 1");
} //CHECK#6


if (eval("(\n1\n)") !== 1) {
  $ERROR("#6: (\\u000A1\\u000A) === 1");
} //CHECK#7


if (eval("(\r1\r)") !== 1) {
  $ERROR("#7: (\\u000D1\\u000D) === 1");
} //CHECK#8


if (eval("(\u20281\u2028)") !== 1) {
  $ERROR("#8: (\\u20281\\u2028) === 1");
} //CHECK#9


if (eval("(\u20291\u2029)") !== 1) {
  $ERROR("#9: (\\u20291\\u2029) === 1");
} //CHECK#10


if (eval("(\t\x0B\f \xA0\n\r\u2028\u20291\t\x0B\f \xA0\n\r\u2028\u2029)") !== 1) {
  $ERROR("#10: (\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029) === 1");
}