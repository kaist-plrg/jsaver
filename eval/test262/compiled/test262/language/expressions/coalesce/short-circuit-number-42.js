var _, _2, _3, _ref, _4, _ref2, _5, _ref3, _6, _ref4, _7, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit if the CoalesceExpressionHead is not undefined or null (42)
esid: sec-conditional-operator
info: |
    ConditionalExpression :
        ShortCircuitExpression
        ShortCircuitExpression ? AssignmentExpression : AssignmentExpression

    ShortCircuitExpression :
        LogicalORExpression
        CoalesceExpression

    CoalesceExpression :
        CoalesceExpressionHead ?? BitwiseORExpression

    CoalesceExpressionHead :
        CoalesceExpression
        BitwiseORExpression

    Runtime Semantics: Evaluation

    CoalesceExpression:CoalesceExpressionHead??BitwiseORExpression

    1. Let lref be the result of evaluating CoalesceExpressionHead.
    2. Let lval be ? GetValue(lref).
    3. If lval is undefined or null,
        a. Let rref be the result of evaluating BitwiseORExpression.
        b. Return ? GetValue(rref).
    4. Otherwise, return lval.
features: [coalesce-expression]
---*/
var x;
x = undefined;
x = (_ = 42) !== null && _ !== void 0 ? _ : 1;
assert.sameValue(x, 42, '42 ?? 1');
x = undefined;
x = (_2 = 42) !== null && _2 !== void 0 ? _2 : null;
assert.sameValue(x, 42, '42 ?? null');
x = undefined;
x = (_3 = 42) !== null && _3 !== void 0 ? _3 : undefined;
assert.sameValue(x, 42, '42 ?? undefined');
x = undefined;
x = (_ref = (_4 = 42) !== null && _4 !== void 0 ? _4 : null) !== null && _ref !== void 0 ? _ref : undefined;
assert.sameValue(x, 42, '42 ?? null ?? undefined');
x = undefined;
x = (_ref2 = (_5 = 42) !== null && _5 !== void 0 ? _5 : undefined) !== null && _ref2 !== void 0 ? _ref2 : null;
assert.sameValue(x, 42, '42 ?? undefined ?? null');
x = undefined;
x = (_ref3 = (_6 = 42) !== null && _6 !== void 0 ? _6 : null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, 42, '42 ?? null ?? null');
x = undefined;
x = (_ref4 = (_7 = 42) !== null && _7 !== void 0 ? _7 : undefined) !== null && _ref4 !== void 0 ? _ref4 : undefined;
assert.sameValue(x, 42, '42 ?? null ?? null');
x = undefined;
x = (_ref5 = (_ref6 = null) !== null && _ref6 !== void 0 ? _ref6 : 42) !== null && _ref5 !== void 0 ? _ref5 : null;
assert.sameValue(x, 42, 'null ?? 42 ?? null');
x = undefined;
x = (_ref7 = (_ref8 = null) !== null && _ref8 !== void 0 ? _ref8 : 42) !== null && _ref7 !== void 0 ? _ref7 : undefined;
assert.sameValue(x, 42, 'null ?? 42 ?? undefined');
x = undefined;
x = (_ref9 = undefined !== null && undefined !== void 0 ? undefined : 42) !== null && _ref9 !== void 0 ? _ref9 : null;
assert.sameValue(x, 42, 'undefined ?? 42 ?? null');
x = undefined;
x = (_ref10 = undefined !== null && undefined !== void 0 ? undefined : 42) !== null && _ref10 !== void 0 ? _ref10 : undefined;
assert.sameValue(x, 42, 'undefined ?? 42 ?? undefined');