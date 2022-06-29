var _value, _value2, _value3, _value4, _value5, _value6, _value7, _value8, _value9, _value10, _value11, _value12;

// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: Logical Nullish Assignment Operator
info: |
    AssignmentExpression:
      LeftHandSideExpression ??= AssignmentExpression

    1. Let lref be the result of evaluating LeftHandSideExpression.
    2. Let lval be ? GetValue(lref).
    3. If lval is neither undefined nor null, return lval.
    4. Let rref be the result of evaluating AssignmentExpression.
    5. Let rval be ? GetValue(rref).
    6. Perform ? PutValue(lref, rval).
    7. Return rval.
features: [logical-assignment-operators]

---*/
var value = undefined;
assert.sameValue((_value = value) !== null && _value !== void 0 ? _value : value = 1, 1, "(value ??= 1) === 1; where value = undefined");
value = null;
assert.sameValue((_value2 = value) !== null && _value2 !== void 0 ? _value2 : value = 1, 1, "(value ??= 1) === 1; where value = null");
value = false;
assert.sameValue((_value3 = value) !== null && _value3 !== void 0 ? _value3 : value = 1, false, "(value ??= 1) === false; where value = false");
value = 0;
assert.sameValue((_value4 = value) !== null && _value4 !== void 0 ? _value4 : value = 1, 0, "(value ??= 1) === 0; where value = 0");
value = -0;
assert.sameValue((_value5 = value) !== null && _value5 !== void 0 ? _value5 : value = 1, -0, "(value ??= 1) === -0; where value = -0");
value = NaN;
assert.sameValue((_value6 = value) !== null && _value6 !== void 0 ? _value6 : value = 1, NaN, "(value ??= 1) === NaN; where value = NaN");
value = "";
assert.sameValue((_value7 = value) !== null && _value7 !== void 0 ? _value7 : value = 1, "", '(value ??= 1) === "" where value = ""');
value = true;
assert.sameValue((_value8 = value) !== null && _value8 !== void 0 ? _value8 : value = 1, true, "(value ??= 1) === true; where value = true");
value = 2;
assert.sameValue((_value9 = value) !== null && _value9 !== void 0 ? _value9 : value = 1, 2, "(value ??= 1) === 2; where value = 2");
value = "test";
assert.sameValue((_value10 = value) !== null && _value10 !== void 0 ? _value10 : value = 1, "test", '(value ??= 1) === "test"; where value = "test"');
var sym = Symbol("");
value = sym;
assert.sameValue((_value11 = value) !== null && _value11 !== void 0 ? _value11 : value = 1, sym, "(value ??= 1) === Symbol(); where value = Symbol()");
var obj = {};
value = obj;
assert.sameValue((_value12 = value) !== null && _value12 !== void 0 ? _value12 : value = 1, obj, "(value ??= 1) === {}; where value = {}");