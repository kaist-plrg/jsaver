// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Test the get accessor function of Symbol.prototype.description.
info: |
    1. Let s be the this value.
    2. Let sym be ? thisSymbolValue(s).
    3. Return sym.[[Description]].
features: [Symbol.prototype.description]
---*/
var symbol = Symbol('test');
assert.sameValue(symbol.description, 'test', 'The value of symbol.description is "test"');
var empty = Symbol();
assert.sameValue(empty.description, undefined, 'The value of empty.description is `undefined`');
var undef = Symbol(undefined);
assert.sameValue(undef.description, undefined, 'The value of undef.description is `undefined`');
var emptyStr = Symbol('');
assert.sameValue(emptyStr.description, '', 'The value of emptyStr.description is ""');