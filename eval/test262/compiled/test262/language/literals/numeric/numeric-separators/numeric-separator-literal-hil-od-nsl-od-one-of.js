// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit
info: |
  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/
assert.sameValue(0x00, 0x00);
assert.sameValue(0x11, 0x11);
assert.sameValue(0x22, 0x22);
assert.sameValue(0x33, 0x33);
assert.sameValue(0x44, 0x44);
assert.sameValue(0x55, 0x55);
assert.sameValue(0x66, 0x66);
assert.sameValue(0x77, 0x77);
assert.sameValue(0x88, 0x88);
assert.sameValue(0x99, 0x99);
assert.sameValue(0xaa, 0xaa);
assert.sameValue(0xbb, 0xbb);
assert.sameValue(0xcc, 0xcc);
assert.sameValue(0xdd, 0xdd);
assert.sameValue(0xee, 0xee);
assert.sameValue(0xff, 0xff);
assert.sameValue(0xAA, 0xAA);
assert.sameValue(0xBB, 0xBB);
assert.sameValue(0xCC, 0xCC);
assert.sameValue(0xDD, 0xDD);
assert.sameValue(0xEE, 0xEE);
assert.sameValue(0xFF, 0xFF);