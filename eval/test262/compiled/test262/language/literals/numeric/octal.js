// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.8.3.1
description: Mathematical value of valid octal integer literals
info: |
    The MV of StrNumericLiteral ::: OctalIntegerLiteral is the MV of
    OctalIntegerLiteral.
    The MV of OctalIntegerLiteral :: 0o OctalDigits is the MV of OctalDigits.
    The MV of OctalIntegerLiteral :: 0O OctalDigits is the MV of OctalDigits.
    The MV of OctalDigits :: OctalDigit is the MV of OctalDigit.
    The MV of OctalDigits :: OctalDigits OctalDigit is (the MV of OctalDigits ×
    8) plus the MV of OctalDigit.
---*/
assert.sameValue(0, 0, 'lower-case head');
assert.sameValue(0, 0, 'upper-case head');
assert.sameValue(0, 0, 'lower-case head with leading zeros');
assert.sameValue(0, 0, 'upper-case head with leading zeros');
assert.sameValue(1, 1, 'lower-case head');
assert.sameValue(1, 1, 'upper-case head');
assert.sameValue(1, 1, 'lower-case head with leading zeros');
assert.sameValue(1, 1, 'upper-case head with leading zeros');
assert.sameValue(7, 7, 'lower-case head');
assert.sameValue(7, 7, 'upper-case head');
assert.sameValue(7, 7, 'lower-case head with leading zeros');
assert.sameValue(7, 7, 'upper-case head with leading zeros');
assert.sameValue(8, 8, 'lower-case head');
assert.sameValue(8, 8, 'upper-case head');
assert.sameValue(8, 8, 'lower-case head with leading zeros');
assert.sameValue(8, 8, 'upper-case head with leading zeros');
assert.sameValue(9, 9, 'lower-case head');
assert.sameValue(9, 9, 'upper-case head');
assert.sameValue(9, 9, 'lower-case head with leading zeros');
assert.sameValue(9, 9, 'upper-case head with leading zeros');
assert.sameValue(63, 63, 'lower-case head');
assert.sameValue(63, 63, 'upper-case head');
assert.sameValue(63, 63, 'lower-case head with leading zeros');
assert.sameValue(63, 63, 'upper-case head with leading zeros');