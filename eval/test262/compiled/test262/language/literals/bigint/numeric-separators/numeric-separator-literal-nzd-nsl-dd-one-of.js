// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NonZeroDigit NumericLiteralSeparator DecimalDigit
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

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

  DecimalDigits ::
    DecimalDigit
    ...

  DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9

features: [BigInt, numeric-separator-literal]
---*/
assert.sameValue(10n, 10n);
assert.sameValue(11n, 11n);
assert.sameValue(22n, 22n);
assert.sameValue(33n, 33n);
assert.sameValue(44n, 44n);
assert.sameValue(55n, 55n);
assert.sameValue(66n, 66n);
assert.sameValue(77n, 77n);
assert.sameValue(88n, 88n);
assert.sameValue(99n, 99n);