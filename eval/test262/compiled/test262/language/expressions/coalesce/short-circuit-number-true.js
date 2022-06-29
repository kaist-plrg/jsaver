var _true, _true2, _true3, _ref, _true4, _ref2, _true5, _ref3, _true6, _ref4, _true7, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit if the CoalesceExpressionHead is not undefined or null (true)
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
x = (_true = true) !== null && _true !== void 0 ? _true : 1;
assert.sameValue(x, true, 'true ?? null');
x = undefined;
x = (_true2 = true) !== null && _true2 !== void 0 ? _true2 : null;
assert.sameValue(x, true, 'true ?? null');
x = undefined;
x = (_true3 = true) !== null && _true3 !== void 0 ? _true3 : undefined;
assert.sameValue(x, true, 'true ?? undefined');
x = undefined;
x = (_ref = (_true4 = true) !== null && _true4 !== void 0 ? _true4 : null) !== null && _ref !== void 0 ? _ref : undefined;
assert.sameValue(x, true, 'true ?? null ?? undefined');
x = undefined;
x = (_ref2 = (_true5 = true) !== null && _true5 !== void 0 ? _true5 : undefined) !== null && _ref2 !== void 0 ? _ref2 : null;
assert.sameValue(x, true, 'true ?? undefined ?? null');
x = undefined;
x = (_ref3 = (_true6 = true) !== null && _true6 !== void 0 ? _true6 : null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, true, 'true ?? null ?? null');
x = undefined;
x = (_ref4 = (_true7 = true) !== null && _true7 !== void 0 ? _true7 : undefined) !== null && _ref4 !== void 0 ? _ref4 : undefined;
assert.sameValue(x, true, 'true ?? null ?? null');
x = undefined;
x = (_ref5 = (_ref6 = null) !== null && _ref6 !== void 0 ? _ref6 : true) !== null && _ref5 !== void 0 ? _ref5 : null;
assert.sameValue(x, true, 'null ?? true ?? null');
x = undefined;
x = (_ref7 = (_ref8 = null) !== null && _ref8 !== void 0 ? _ref8 : true) !== null && _ref7 !== void 0 ? _ref7 : undefined;
assert.sameValue(x, true, 'null ?? true ?? undefined');
x = undefined;
x = (_ref9 = undefined !== null && undefined !== void 0 ? undefined : true) !== null && _ref9 !== void 0 ? _ref9 : null;
assert.sameValue(x, true, 'undefined ?? true ?? null');
x = undefined;
x = (_ref10 = undefined !== null && undefined !== void 0 ? undefined : true) !== null && _ref10 !== void 0 ? _ref10 : undefined;
assert.sameValue(x, true, 'undefined ?? true ?? undefined');