var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    If the CoalesceExpressionHead is undefined or null, follow return the right-side value.
    Otherwise, return the left-side value.
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
x = (_ref = (_ref2 = null) !== null && _ref2 !== void 0 ? _ref2 : undefined) !== null && _ref !== void 0 ? _ref : 42;
assert.sameValue(x, 42, 'null ?? undefined ?? 42');
x = (_ref3 = undefined !== null && undefined !== void 0 ? undefined : null) !== null && _ref3 !== void 0 ? _ref3 : 42;
assert.sameValue(x, 42, 'undefined ?? null ?? 42');
x = (_ref4 = (_ref5 = null) !== null && _ref5 !== void 0 ? _ref5 : null) !== null && _ref4 !== void 0 ? _ref4 : 42;
assert.sameValue(x, 42, 'null ?? null ?? 42');
x = (_ref6 = undefined !== null && undefined !== void 0 ? undefined : undefined) !== null && _ref6 !== void 0 ? _ref6 : 42;
assert.sameValue(x, 42, 'null ?? null ?? 42');