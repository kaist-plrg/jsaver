// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T13
description: >
    Arguments are objects, and instance is string.  First object have
    overrided valueOf and toString functions.  Second object have
    overrided toString function, that return exception
---*/
var __obj = {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return 1;
  }
};
var __obj2 = {
  toString: function toString() {
    throw "inend";
  }
}; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

try {
  var x = "ABBABABAB1BBAA".slice(__obj, __obj2);
  $ERROR('#1: "var x = slice(__obj,__obj2)" lead to throwing exception');
} catch (e) {
  if (e !== "inend") {
    $ERROR('#1.1: Exception === "inend". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////