// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the [[Get]] method of O is called with property name P value of P
    returns
es5id: 8.12.3_A3
description: Try to get P property P exist in instance
---*/
var __map = {
  shape: "cube",
  5: "five",
  "6": "six"
}; //////////////////////////////////////////////////////////////////////////////
//CHECK#1

if (__map.shape !== "cube") {
  $ERROR('#1: var __map={shape:"cube", 5:"five", "6":"six"}; __map.shape === "cube". Actual: ' + __map.shape);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#2


if (__map["shape"] !== "cube") {
  $ERROR('#2: var __map={shape:"cube", 5:"five", "6":"six"}; __map["shape"] === "cube". Actual: ' + __map["shape"]);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#3


if (__map["5"] !== "five") {
  $ERROR('#3: var __map={shape:"cube", 5:"five", "6":"six"}; __map["5"] === "five". Actual: ' + __map["5"]);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#4


if (__map[5] !== "five") {
  $ERROR('#4: var __map={shape:"cube", 5:"five", "6":"six"}; __map[5] === "five". Actual: ' + __map[5]);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#5


if (__map["6"] !== "six") {
  $ERROR('#5: var __map={shape:"cube", 5:"five", "6":"six"}; __map["6"] === "six". Actual: ' + __map["6"]);
} //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CHECK#6


if (__map[6] !== "six") {
  $ERROR('#6: var __map={shape:"cube", 5:"five", "6":"six"}; __map[6] === "six". Actual: ' + __map[6]);
} //
//////////////////////////////////////////////////////////////////////////////