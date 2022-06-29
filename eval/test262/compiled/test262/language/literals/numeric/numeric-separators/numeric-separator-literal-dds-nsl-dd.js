// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: DecimalDigits NumericLiteralSeparator DecimalDigit
info: |
  NumericLiteralSeparator ::
    _

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

features: [numeric-separator-literal]
---*/
assert.sameValue(1234567890, 1234567890);
assert.sameValue(1234567891, 1234567891);
assert.sameValue(1234567892, 1234567892);
assert.sameValue(1234567893, 1234567893);
assert.sameValue(1234567894, 1234567894);
assert.sameValue(1234567895, 1234567895);
assert.sameValue(1234567896, 1234567896);
assert.sameValue(1234567897, 1234567897);
assert.sameValue(1234567898, 1234567898);
assert.sameValue(1234567899, 1234567899);