// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between EqualityExpression and "!==" or
    between "!==" and RelationalExpression are allowed
es5id: 11.9.5_A1
description: Checking by using eval
---*/
//CHECK#1
if (eval("1\t!==\t1")) {
  $ERROR("#1: 1\\u0009!==\\u00091");
} //CHECK#2


if (eval("1\x0B!==\x0B1")) {
  $ERROR("#2: 1\\u000B!==\\u000B1");
} //CHECK#3


if (eval("1\f!==\f1")) {
  $ERROR("#3: 1\\u000C!==\\u000C1");
} //CHECK#4


if (eval("1 !== 1")) {
  $ERROR("#4: 1\\u0020!==\\u00201");
} //CHECK#5


if (eval("1\xA0!==\xA01")) {
  $ERROR("#5: 1\\u00A0!==\\u00A01");
} //CHECK#6


if (eval("1\n!==\n1")) {
  $ERROR("#6: 1\\u000A!==\\u000A1");
} //CHECK#7


if (eval("1\r!==\r1")) {
  $ERROR("#7: 1\\u000D!==\\u000D1");
} //CHECK#8


if (eval("1\u2028!==\u20281")) {
  $ERROR("#8: 1\\u2028!==\\u20281");
} //CHECK#9


if (eval("1\u2029!==\u20291")) {
  $ERROR("#9: 1\\u2029!==\\u20291");
} //CHECK#10


if (eval("1\t\x0B\f \xA0\n\r\u2028\u2029!==\t\x0B\f \xA0\n\r\u2028\u20291")) {
  $ERROR("#10: 1\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029!==\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291");
}