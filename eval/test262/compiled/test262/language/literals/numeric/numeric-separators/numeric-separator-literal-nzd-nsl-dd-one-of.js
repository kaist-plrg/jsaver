// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NonZeroDigit NumericLiteralSeparator DecimalDigit
info: |
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

features: [numeric-separator-literal]
---*/
assert.sameValue(10, 10);
assert.sameValue(11, 11);
assert.sameValue(22, 22);
assert.sameValue(33, 33);
assert.sameValue(44, 44);
assert.sameValue(55, 55);
assert.sameValue(66, 66);
assert.sameValue(77, 77);
assert.sameValue(88, 88);
assert.sameValue(99, 99);