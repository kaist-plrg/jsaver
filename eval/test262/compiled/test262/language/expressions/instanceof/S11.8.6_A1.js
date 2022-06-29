// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between RelationalExpression and
    "instanceof" and between "instanceof" and ShiftExpression are allowed
es5id: 11.8.6_A1
description: Checking by using eval
---*/
//CHECK#1
if (eval("({})\tinstanceof\tObject") !== true) {
  $ERROR("#1: ({})\\u0009instanceof\\u0009Object === true");
} //CHECK#2


if (eval("({})\x0Binstanceof\x0BObject") !== true) {
  $ERROR("#2: ({})\\u000Binstanceof\\u000BObject === true");
} //CHECK#3


if (eval("({})\finstanceof\fObject") !== true) {
  $ERROR("#3: ({})\\u000Cinstanceof\\u000CObject === true");
} //CHECK#4


if (eval("({}) instanceof Object") !== true) {
  $ERROR("#4: ({})\\u0020instanceof\\u0020Object === true");
} //CHECK#5


if (eval("({})\xA0instanceof\xA0Object") !== true) {
  $ERROR("#5: ({})\\u00A0instanceof\\u00A0Object === true");
} //CHECK#6


if (eval("({})\ninstanceof\nObject") !== true) {
  $ERROR("#6: ({})\\u000Ainstanceof\\u000AObject === true");
} //CHECK#7


if (eval("({})\rinstanceof\rObject") !== true) {
  $ERROR("#7: ({})\\u000Dinstanceof\\u000DObject === true");
} //CHECK#8


if (eval("({})\u2028instanceof\u2028Object") !== true) {
  $ERROR("#8: ({})\\u2028instanceof\\u2028Object === true");
} //CHECK#9


if (eval("({})\u2029instanceof\u2029Object") !== true) {
  $ERROR("#9: ({})\\u2029instanceof\\u2029Object === true");
} //CHECK#10


if (eval("({})\t\x0B\f \xA0\n\r\u2028\u2029instanceof\t\x0B\f \xA0\n\r\u2028\u2029Object") !== true) {
  $ERROR("#10: ({})\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029instanceof\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029Object === true");
}