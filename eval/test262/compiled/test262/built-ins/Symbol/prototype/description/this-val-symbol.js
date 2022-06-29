// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Test that calling the getter on a Symbol or a Symbol wrapper object works.
info: |
    1. Let s be the this value.
    2. Let sym be ? thisSymbolValue(s).
    3. Return sym.[[Description]].
features: [Symbol.prototype.description]
---*/
var getter = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description').get;
var symbol = Symbol('test');
assert.sameValue(getter.call(symbol), 'test', 'getter.call(symbol) returns "test"');
assert.sameValue(getter.call(Object(symbol)), 'test', 'getter.call(Object(symbol)) returns "test"');
var empty = Symbol();
assert.sameValue(getter.call(empty), undefined, 'getter.call(empty) returns `undefined`');
assert.sameValue(getter.call(Object(empty)), undefined, 'getter.call(Object(empty)) returns `undefined`');
var undef = Symbol(undefined);
assert.sameValue(getter.call(undef), undefined, 'getter.call(undef) returns `undefined`');
assert.sameValue(getter.call(Object(undef)), undefined, 'getter.call(Object(undef)) returns `undefined`');
var emptyStr = Symbol('');
assert.sameValue(getter.call(emptyStr), '', 'getter.call(emptyStr) returns ""');
assert.sameValue(getter.call(Object(emptyStr)), '', 'getter.call(Object(emptyStr)) returns ""');