// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
    Then Call ToString(searchString) and Call ToNumber(position)
es5id: 15.5.4.8_A4_T2
description: >
    Override toString and valueOf functions, second toString throw
    exception
---*/
var __obj = {
  toString: function toString() {
    return "AB";
  }
};
var __obj2 = {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    throw "intointeger";
  }
};

var __str = new String("ABBABABAB"); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


try {
  var x = __str.lastIndexOf(__obj, __obj2);

  $ERROR('#1: var x = __str.lastIndexOf(__obj, __obj2) lead to throwing exception');
} catch (e) {
  if (e !== "intointeger") {
    $ERROR('#1.1: Exception === "intointeger". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////