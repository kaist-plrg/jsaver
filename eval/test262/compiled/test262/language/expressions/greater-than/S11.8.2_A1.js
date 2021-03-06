// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between RelationalExpression and ">" or
    ">" and ShiftExpression are allowed
es5id: 11.8.2_A1
description: Checking by using eval
---*/
//CHECK#1
if (eval("0\t>\t1") !== false) {
  $ERROR("#1: 0\\u0009>\\u00091) === false");
} //CHECK#2


if (eval("0\x0B>\x0B1") !== false) {
  $ERROR("#2: 0\\u000B>\\u000B1) === false");
} //CHECK#3


if (eval("0\f>\f1") !== false) {
  $ERROR("#3: (0\\u000C>\\u000C1) === false");
} //CHECK#4


if (eval("0 > 1") !== false) {
  $ERROR("#4: (0\\u0020>\\u00201) === false");
} //CHECK#5


if (eval("0\xA0>\xA01") !== false) {
  $ERROR("#5: (0\\u00A0>\\u00A01) === false");
} //CHECK#6


if (eval("0\n>\n1") !== false) {
  $ERROR("#6: (0\\u000A>\\u000A1) === false");
} //CHECK#7


if (eval("0\r>\r1") !== false) {
  $ERROR("#7: (0\\u000D>\\u000D1) === false");
} //CHECK#8


if (eval("0\u2028>\u20281") !== false) {
  $ERROR("#8: (0\\u2028>\\u20281) === false");
} //CHECK#9


if (eval("0\u2029>\u20291") !== false) {
  $ERROR("#9: (0\\u2029>\\u20291) === false");
} //CHECK#10


if (eval("1\t\x0B\f \xA0\n\r\u2028\u2029>=\t\x0B\f \xA0\n\r\u2028\u20291") !== true) {
  $ERROR("#10: (1\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029>=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === true");
}