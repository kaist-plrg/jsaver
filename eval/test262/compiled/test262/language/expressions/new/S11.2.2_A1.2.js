// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between "new" and MemberExpression are
    allowed
es5id: 11.2.2_A1.2
description: Checking by using eval
---*/
//CHECK#1
if (eval("new\tNumber()") != 0) {
  $ERROR("#1: new\\u0009Number == 0");
} //CHECK#2


if (eval("new\x0BNumber()") != 0) {
  $ERROR("#2: new\\u000BNumber == 0");
} //CHECK#3


if (eval("new\fNumber()") != 0) {
  $ERROR("#3: new\\u000CNumber == 0");
} //CHECK#4


if (eval("new Number()") != 0) {
  $ERROR("#4: new\\u0020Number == 0");
} //CHECK#5


if (eval("new\xA0Number()") != 0) {
  $ERROR("#5: new\\u00A0Number == 0");
} //CHECK#6


if (eval("new\nNumber()") != 0) {
  $ERROR("#6: new\\u000ANumber == 0");
} //CHECK#7


if (eval("new\rNumber()") != 0) {
  $ERROR("#7: new\\u000DNumber == 0");
} //CHECK#8


if (eval("new\u2028Number()") != 0) {
  $ERROR("#8: new\\u2028Number == 0");
} //CHECK#9


if (eval("new\u2029Number()") != 0) {
  $ERROR("#9: new\\u2029Number == 0");
} //CHECK#10


if (eval("new\t\x0B\f \xA0\n\r\u2028\u2029Number()") != 0) {
  $ERROR("#10: new\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029Number == 0");
}