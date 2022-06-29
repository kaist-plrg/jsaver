var _ref, _ref2, _ref3, _ref4;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    If the CoalesceExpressionHead is null, follow return the right-side eval.
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
x = (_ref = null) !== null && _ref !== void 0 ? _ref : 42;
assert.sameValue(x, 42, 'null ?? 42');
x = (_ref2 = null) !== null && _ref2 !== void 0 ? _ref2 : undefined;
assert.sameValue(x, undefined, 'null ?? undefined');
x = (_ref3 = null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, null, 'null ?? null');
x = (_ref4 = null) !== null && _ref4 !== void 0 ? _ref4 : false;
assert.sameValue(x, false, 'null ?? false');