// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x >>>= y is the same as x = x >>> y
es5id: 11.13.2_A4.8_T2.5
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Boolean (primitive and object)
---*/
var x; //CHECK#1

x = true;
x >>>= "1";

if (x !== 0) {
  $ERROR('#1: x = true; x >>>= "1"; x === 0. Actual: ' + x);
} //CHECK#2


x = "1";
x >>>= true;

if (x !== 0) {
  $ERROR('#2: x = "1"; x >>>= true; x === 0. Actual: ' + x);
} //CHECK#3


x = new Boolean(true);
x >>>= "1";

if (x !== 0) {
  $ERROR('#3: x = new Boolean(true); x >>>= "1"; x === 0. Actual: ' + x);
} //CHECK#4


x = "1";
x >>>= new Boolean(true);

if (x !== 0) {
  $ERROR('#4: x = "1"; x >>>= new Boolean(true); x === 0. Actual: ' + x);
} //CHECK#5


x = true;
x >>>= new String("1");

if (x !== 0) {
  $ERROR('#5: x = true; x >>>= new String("1"); x === 0. Actual: ' + x);
} //CHECK#6


x = new String("1");
x >>>= true;

if (x !== 0) {
  $ERROR('#6: x = new String("1"); x >>>= true; x === 0. Actual: ' + x);
} //CHECK#7


x = new Boolean(true);
x >>>= new String("1");

if (x !== 0) {
  $ERROR('#7: x = new Boolean(true); x >>>= new String("1"); x === 0. Actual: ' + x);
} //CHECK#8


x = new String("1");
x >>>= new Boolean(true);

if (x !== 0) {
  $ERROR('#8: x = new String("1"); x >>>= new Boolean(true); x === 0. Actual: ' + x);
}