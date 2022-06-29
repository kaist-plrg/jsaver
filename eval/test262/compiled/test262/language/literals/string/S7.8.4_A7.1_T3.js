// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    EscapeSequence :: UnicodeEscapeSequence :: u HexDigit HexDigit HexDigit
    HexDigit
es5id: 7.8.4_A7.1_T3
description: "UnicodeEscapeSequence ::  ENGLISH SMALL ALPHABET"
---*/
//CHECK#a-z
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var index = 0; index <= 25; index++) {
  if (unicode[index] !== character[index]) {
    $ERROR('#' + character[index] + ' ');
  }
}