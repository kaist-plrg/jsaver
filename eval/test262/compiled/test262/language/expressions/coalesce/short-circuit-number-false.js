var _false, _false2, _false3, _ref, _false4, _ref2, _false5, _ref3, _false6, _ref4, _false7, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit if the CoalesceExpressionHead is not undefined or null (false)
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
x = (_false = false) !== null && _false !== void 0 ? _false : 1;
assert.sameValue(x, false, 'false ?? 1');
x = undefined;
x = (_false2 = false) !== null && _false2 !== void 0 ? _false2 : null;
assert.sameValue(x, false, 'false ?? null');
x = undefined;
x = (_false3 = false) !== null && _false3 !== void 0 ? _false3 : undefined;
assert.sameValue(x, false, 'false ?? undefined');
x = undefined;
x = (_ref = (_false4 = false) !== null && _false4 !== void 0 ? _false4 : null) !== null && _ref !== void 0 ? _ref : undefined;
assert.sameValue(x, false, 'false ?? null ?? undefined');
x = undefined;
x = (_ref2 = (_false5 = false) !== null && _false5 !== void 0 ? _false5 : undefined) !== null && _ref2 !== void 0 ? _ref2 : null;
assert.sameValue(x, false, 'false ?? undefined ?? null');
x = undefined;
x = (_ref3 = (_false6 = false) !== null && _false6 !== void 0 ? _false6 : null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, false, 'false ?? null ?? null');
x = undefined;
x = (_ref4 = (_false7 = false) !== null && _false7 !== void 0 ? _false7 : undefined) !== null && _ref4 !== void 0 ? _ref4 : undefined;
assert.sameValue(x, false, 'false ?? null ?? null');
x = undefined;
x = (_ref5 = (_ref6 = null) !== null && _ref6 !== void 0 ? _ref6 : false) !== null && _ref5 !== void 0 ? _ref5 : null;
assert.sameValue(x, false, 'null ?? false ?? null');
x = undefined;
x = (_ref7 = (_ref8 = null) !== null && _ref8 !== void 0 ? _ref8 : false) !== null && _ref7 !== void 0 ? _ref7 : undefined;
assert.sameValue(x, false, 'null ?? false ?? undefined');
x = undefined;
x = (_ref9 = undefined !== null && undefined !== void 0 ? undefined : false) !== null && _ref9 !== void 0 ? _ref9 : null;
assert.sameValue(x, false, 'undefined ?? false ?? null');
x = undefined;
x = (_ref10 = undefined !== null && undefined !== void 0 ? undefined : false) !== null && _ref10 !== void 0 ? _ref10 : undefined;
assert.sameValue(x, false, 'undefined ?? false ?? undefined');