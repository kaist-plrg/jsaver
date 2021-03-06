// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.1_A2.4_T2
description: Checking with "throw"
---*/
//CHECK#1
var x = function x() {
  throw "x";
};

var y = function y() {
  throw "y";
};

try {
  x() < y();
  $ERROR('#1.1: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() < y() throw "x". Actual: ' + (x() < y()));
} catch (e) {
  if (e === "y") {
    $ERROR('#1.2: First expression is evaluated first, and then second expression');
  } else {
    if (e !== "x") {
      $ERROR('#1.3: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() < y() throw "x". Actual: ' + e);
    }
  }
}