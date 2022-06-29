// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit
info: |
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

features: [numeric-separator-literal]
---*/
assert.sameValue(0, 0);
assert.sameValue(9, 9);
assert.sameValue(18, 18);
assert.sameValue(27, 27);
assert.sameValue(36, 36);
assert.sameValue(45, 45);
assert.sameValue(54, 54);
assert.sameValue(63, 63);