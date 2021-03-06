// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: In ES5, First expression should be evaluated first.
es5id: 11.8.2_A2.3_T1
description: Checking that operands of a "<" evaluate left-to-right
---*/
//CHECK#1
var x = {
  valueOf: function valueOf() {
    throw "x";
  }
};
var y = {
  valueOf: function valueOf() {
    throw "y";
  }
};

try {
  x > y;
  $ERROR('#1.1: Should have thrown');
} catch (e) {
  if (e === "y") {
    $ERROR('#1.2: First expression should be evaluated first');
  } else {
    if (e !== "x") {
      $ERROR('#1.3: Failed with: ' + e);
    }
  }
}