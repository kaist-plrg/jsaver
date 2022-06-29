var _ref, _ref2, _ref3, _, _ref4, _ref5;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    CoalesceExpression is chainable with the LogicalORExpression is any is covered.
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
x = ((_ref = null) !== null && _ref !== void 0 ? _ref : 42) || 43;
assert.sameValue(x, 42, '(null ?? 42) || 43');
x = undefined;
x = (_ref2 = null) !== null && _ref2 !== void 0 ? _ref2 : 42 || 43;
assert.sameValue(x, 42, 'null ?? (42 || 43)`');
x = undefined;
x = (_ref3 = null || 42) !== null && _ref3 !== void 0 ? _ref3 : 43;
assert.sameValue(x, 42, '(null || 42) ?? 43');
x = undefined;
x = null || ((_ = 42) !== null && _ !== void 0 ? _ : 43);
assert.sameValue(x, 42, 'null || (42 ?? 43)`');
x = undefined;
x = (_ref4 = 42 || 43) !== null && _ref4 !== void 0 ? _ref4 : null;
assert.sameValue(x, 42, '(42 || 43) ?? null');
x = undefined;
x = 42 || ((_ref5 = null) !== null && _ref5 !== void 0 ? _ref5 : 43);
assert.sameValue(x, 42, '42 || (null ?? 43)');