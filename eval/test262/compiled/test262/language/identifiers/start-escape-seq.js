// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierPart :: IdentifierStart"
es5id: 7.6_A2.1_T4
description: "IdentifierStart :: \\UnicodeEscapeSequence"
---*/
var x = 1;
assert.sameValue(x, 1);
var xx = 2;
assert.sameValue(xx, 2);
var $ = 3;
assert.sameValue($, 3);
var $x = 4;
assert.sameValue($x, 4);
var $$ = 5;
assert.sameValue($$, 5);
var $_ = 6;
assert.sameValue($_, 6);
var _ = 7;
assert.sameValue(_, 7);
var _x = 8;
assert.sameValue(_x, 8);
var _$ = 9;
assert.sameValue(_$, 9);
var __ = 10;
assert.sameValue(__, 10);