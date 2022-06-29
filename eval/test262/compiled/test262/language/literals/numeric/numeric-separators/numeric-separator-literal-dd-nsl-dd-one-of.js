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


  DecimalDigits ::
    DecimalDigit
    ...

  DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9

features: [numeric-separator-literal]
---*/
assert.sameValue(10, 10);
assert.sameValue(11, 11);
assert.sameValue(12, 12);
assert.sameValue(13, 13);
assert.sameValue(14, 14);
assert.sameValue(15, 15);
assert.sameValue(16, 16);
assert.sameValue(17, 17);
assert.sameValue(18, 18);
assert.sameValue(19, 19);