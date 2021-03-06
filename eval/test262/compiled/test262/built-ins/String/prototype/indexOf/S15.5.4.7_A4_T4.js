// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    when String.prototype.indexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
    Then Call ToString(searchString) and Call ToNumber(position)
es5id: 15.5.4.7_A4_T4
description: Override toString and valueOf functions, and they throw exceptions
---*/
var __obj = {
  toString: function toString() {
    throw "intostr";
  }
};
var __obj2 = {
  valueOf: function valueOf() {
    throw "intoint";
  }
};

var __instance = new Number(10001.10001);

Number.prototype.indexOf = String.prototype.indexOf; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

try {
  var x = __instance.indexOf(__obj, __obj2);

  $ERROR('#1: "var x = __instance.indexOf(__obj, __obj2)" lead to throwing exception');
} catch (e) {
  if (e !== "intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////