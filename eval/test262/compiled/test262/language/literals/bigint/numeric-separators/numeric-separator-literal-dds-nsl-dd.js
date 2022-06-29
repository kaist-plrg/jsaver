// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: DecimalDigits NumericLiteralSeparator DecimalDigit
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

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

features: [BigInt, numeric-separator-literal]
---*/
assert.sameValue(1234567890n, 1234567890n);
assert.sameValue(1234567891n, 1234567891n);
assert.sameValue(1234567892n, 1234567892n);
assert.sameValue(1234567893n, 1234567893n);
assert.sameValue(1234567894n, 1234567894n);
assert.sameValue(1234567895n, 1234567895n);
assert.sameValue(1234567896n, 1234567896n);
assert.sameValue(1234567897n, 1234567897n);
assert.sameValue(1234567898n, 1234567898n);
assert.sameValue(1234567899n, 1234567899n);