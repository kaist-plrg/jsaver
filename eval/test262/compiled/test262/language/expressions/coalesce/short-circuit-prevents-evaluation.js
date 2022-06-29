var _ref, _ref2, _ref3, _, _ref4, _2;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit can prevent evaluation of the right-side expressions
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

function poison() {
  throw new Test262Error('should not evaluate poison');
}

x = undefined;
x = (_ref = (_ref2 = undefined !== null && undefined !== void 0 ? undefined : 42) !== null && _ref2 !== void 0 ? _ref2 : undefined) !== null && _ref !== void 0 ? _ref : poison();
assert.sameValue(x, 42);
x = undefined;
x = (_ref3 = (_ = 42) !== null && _ !== void 0 ? _ : undefined) !== null && _ref3 !== void 0 ? _ref3 : poison();
assert.sameValue(x, 42);
x = undefined;
x = (_ref4 = undefined !== null && undefined !== void 0 ? undefined : 42) !== null && _ref4 !== void 0 ? _ref4 : poison();
assert.sameValue(x, 42);
x = undefined;
x = (_2 = 42) !== null && _2 !== void 0 ? _2 : poison();
assert.sameValue(x, 42);