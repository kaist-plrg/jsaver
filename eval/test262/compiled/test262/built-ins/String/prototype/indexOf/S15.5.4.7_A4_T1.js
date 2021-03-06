// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    when String.prototype.indexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
    Then Call ToString(searchString) and Call ToNumber(position)
es5id: 15.5.4.7_A4_T1
description: Override toString and valueOf functions, valueOf throw exception
---*/
var __obj = {
  toString: function toString() {
    return "AB";
  }
};
var __obj2 = {
  valueOf: function valueOf() {
    throw "intointeger";
  }
};
var __str = "ABBABABAB"; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

try {
  var x = __str.indexOf(__obj, __obj2);

  $ERROR('#1: "var x = __str.indexOf(__obj, __obj2)" lead to throwing exception');
} catch (e) {
  if (e !== "intointeger") {
    $ERROR('#1.1: Exception === "intointeger". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////