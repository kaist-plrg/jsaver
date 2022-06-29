var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit if the CoalesceExpressionHead is not undefined or null (the empty string)
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
var str = '';
x = undefined;
x = str !== null && str !== void 0 ? str : 1;
assert.sameValue(x, str, 'str ?? 1');
x = undefined;
x = str !== null && str !== void 0 ? str : null;
assert.sameValue(x, str, 'str ?? null');
x = undefined;
x = str !== null && str !== void 0 ? str : undefined;
assert.sameValue(x, str, 'str ?? undefined');
x = undefined;
x = (_ref = str !== null && str !== void 0 ? str : null) !== null && _ref !== void 0 ? _ref : undefined;
assert.sameValue(x, str, 'str ?? null ?? undefined');
x = undefined;
x = (_ref2 = str !== null && str !== void 0 ? str : undefined) !== null && _ref2 !== void 0 ? _ref2 : null;
assert.sameValue(x, str, 'str ?? undefined ?? null');
x = undefined;
x = (_ref3 = str !== null && str !== void 0 ? str : null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, str, 'str ?? null ?? null');
x = undefined;
x = (_ref4 = str !== null && str !== void 0 ? str : undefined) !== null && _ref4 !== void 0 ? _ref4 : undefined;
assert.sameValue(x, str, 'str ?? null ?? null');
x = undefined;
x = (_ref5 = (_ref6 = null) !== null && _ref6 !== void 0 ? _ref6 : str) !== null && _ref5 !== void 0 ? _ref5 : null;
assert.sameValue(x, str, 'null ?? str ?? null');
x = undefined;
x = (_ref7 = (_ref8 = null) !== null && _ref8 !== void 0 ? _ref8 : str) !== null && _ref7 !== void 0 ? _ref7 : undefined;
assert.sameValue(x, str, 'null ?? str ?? undefined');
x = undefined;
x = (_ref9 = undefined !== null && undefined !== void 0 ? undefined : str) !== null && _ref9 !== void 0 ? _ref9 : null;
assert.sameValue(x, str, 'undefined ?? str ?? null');
x = undefined;
x = (_ref10 = undefined !== null && undefined !== void 0 ? undefined : str) !== null && _ref10 !== void 0 ? _ref10 : undefined;
assert.sameValue(x, str, 'undefined ?? str ?? undefined');