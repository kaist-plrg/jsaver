// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit
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

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [BigInt, numeric-separator-literal]
---*/
assert.sameValue(0o00n, 0o00n);
assert.sameValue(0o11n, 0o11n);
assert.sameValue(0o22n, 0o22n);
assert.sameValue(0o33n, 0o33n);
assert.sameValue(0o44n, 0o44n);
assert.sameValue(0o55n, 0o55n);
assert.sameValue(0o66n, 0o66n);
assert.sameValue(0o77n, 0o77n);