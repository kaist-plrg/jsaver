// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix
    NumericLiteralBase BigIntLiteralSuffix

  NumericLiteralBase ::
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  BigIntLiteralSuffix :: n

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

features: [BigInt, numeric-separator-literal]
---*/
assert.sameValue(0x00n, 0x00n);
assert.sameValue(0x11n, 0x11n);
assert.sameValue(0x22n, 0x22n);
assert.sameValue(0x33n, 0x33n);
assert.sameValue(0x44n, 0x44n);
assert.sameValue(0x55n, 0x55n);
assert.sameValue(0x66n, 0x66n);
assert.sameValue(0x77n, 0x77n);
assert.sameValue(0x88n, 0x88n);
assert.sameValue(0x99n, 0x99n);
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