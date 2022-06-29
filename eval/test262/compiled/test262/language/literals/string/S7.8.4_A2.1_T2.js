// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Correct interpretation of ENGLISH ALPHABET
es5id: 7.8.4_A2.1_T2
description: Check ENGLISH SMALL ALPHABET
---*/
//CHECK#a-z
var hex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var index = 0; index <= 25; index++) {
  if (hex[index] !== character[index]) {
    $ERROR('#' + character[index] + ' ');
  }
}