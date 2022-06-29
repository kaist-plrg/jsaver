var _x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10;

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    White Space and Line Terminator between LeftHandSideExpression and "@="
    or between "@=" and AssignmentExpression are allowed
esid: sec-assignment-operators
description: Checking by evaluating expression "x[...]??=[...]y"
features: [logical-assignment-operators]
---*/
var x;
x = null;
assert.sameValue((_x = x) !== null && _x !== void 0 ? _x : x = 1, 1, 'U+0009 (expression)');
assert.sameValue(x, 1, 'U+0009 (side effect)');
x = null;
assert.sameValue((_x2 = x) !== null && _x2 !== void 0 ? _x2 : x = 1, 1, 'U+000B (expression)');
assert.sameValue(x, 1, 'U+000B (side effect)');
x = null;
assert.sameValue((_x3 = x) !== null && _x3 !== void 0 ? _x3 : x = 1, 1, 'U+000C (expression)');
assert.sameValue(x, 1, 'U+000C (side effect)');
x = null;
assert.sameValue((_x4 = x) !== null && _x4 !== void 0 ? _x4 : x = 1, 1, 'U+0020 (expression)');
assert.sameValue(x, 1, 'U+0020 (side effect)');
x = null;
assert.sameValue((_x5 = x) !== null && _x5 !== void 0 ? _x5 : x = 1, 1, 'U+00A0 (expression)');
assert.sameValue(x, 1, 'U+00A0 (side effect)');
x = null;
assert.sameValue((_x6 = x) !== null && _x6 !== void 0 ? _x6 : x = 1, 1, 'U+000A (expression)');
assert.sameValue(x, 1, 'U+000A (side effect)');
x = null;
assert.sameValue((_x7 = x) !== null && _x7 !== void 0 ? _x7 : x = 1, 1, 'U+000D (expression)');
assert.sameValue(x, 1, 'U+000D (side effect)');
x = null;
assert.sameValue((_x8 = x) !== null && _x8 !== void 0 ? _x8 : x = 1, 1, 'U+2028 (expression)');
assert.sameValue(x, 1, 'U+2028 (side effect)');
x = null;
assert.sameValue((_x9 = x) !== null && _x9 !== void 0 ? _x9 : x = 1, 1, 'U+2029 (expression)');
assert.sameValue(x, 1, 'U+2029 (side effect)');
x = null;
assert.sameValue((_x10 = x) !== null && _x10 !== void 0 ? _x10 : x = 1, 1, 'U+0009U+000BU+000CU+0020U+00A0U+000AU+000DU+2028U+2029 (expression)');
assert.sameValue(x, 1, 'U+0009U+000BU+000CU+0020U+00A0U+000AU+000DU+2028U+2029 (side effect)');