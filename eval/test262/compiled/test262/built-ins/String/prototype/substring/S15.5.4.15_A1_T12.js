// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.substring (start, end)
es5id: 15.5.4.15_A1_T12
description: >
    Arguments are objects, and instance is string.  First object have
    overrided valueOf function and toString function, that return
    exception.  Second object have overrided valueOf function, that
    return exception
---*/
var __obj = {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    throw "instart";
  }
};
var __obj2 = {
  valueOf: function valueOf() {
    throw "inend";
  }
};

var __str = new String("ABBABABAB"); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


try {
  var x = __str.substring(__obj, __obj2);

  $ERROR('#1: "var x = __str.substring(__obj,__obj2)" lead to throw exception');
} catch (e) {
  if (e !== "instart") {
    $ERROR('#1.1: Exception ==="instart". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////