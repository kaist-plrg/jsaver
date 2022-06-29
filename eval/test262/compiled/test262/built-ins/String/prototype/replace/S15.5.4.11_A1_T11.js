// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T11
description: >
    Call replace (searchValue, replaceValue) function with objects
    arguments of string object. Objects have overrided toString
    function, that throw exception
---*/
var __obj = {
  toString: function toString() {
    throw "insearchValue";
  }
};
var __obj2 = {
  toString: function toString() {
    throw "inreplaceValue";
  }
};
var __str = "ABBABABAB"; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

try {
  var x = __str.replace(__obj, __obj2);

  $ERROR('#1: "var x = __str.replace(__obj,__obj2)" lead to throwing exception');
} catch (e) {
  if (e !== "insearchValue") {
    $ERROR('#1.1: Exception === "insearchValue". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////