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


  DecimalDigits ::
    DecimalDigit
    ...

  DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9

features: [BigInt, numeric-separator-literal]
---*/
assert.sameValue(10n, 10n);
assert.sameValue(11n, 11n);
assert.sameValue(12n, 12n);
assert.sameValue(13n, 13n);
assert.sameValue(14n, 14n);
assert.sameValue(15n, 15n);
assert.sameValue(16n, 16n);
assert.sameValue(17n, 17n);
assert.sameValue(18n, 18n);
assert.sameValue(19n, 19n);