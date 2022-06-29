var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Short circuit if the CoalesceExpressionHead is not undefined or null (object)
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
var obj = {
  toString: function toString() {
    return null;
  },
  valueOf: function valueOf() {
    return null;
  }
};
x = undefined;
x = obj !== null && obj !== void 0 ? obj : 1;
assert.sameValue(x, obj, 'obj ?? 1');
x = undefined;
x = obj !== null && obj !== void 0 ? obj : null;
assert.sameValue(x, obj, 'obj ?? null');
x = undefined;
x = obj !== null && obj !== void 0 ? obj : undefined;
assert.sameValue(x, obj, 'obj ?? undefined');
x = undefined;
x = (_ref = obj !== null && obj !== void 0 ? obj : null) !== null && _ref !== void 0 ? _ref : undefined;
assert.sameValue(x, obj, 'obj ?? null ?? undefined');
x = undefined;
x = (_ref2 = obj !== null && obj !== void 0 ? obj : undefined) !== null && _ref2 !== void 0 ? _ref2 : null;
assert.sameValue(x, obj, 'obj ?? undefined ?? null');
x = undefined;
x = (_ref3 = obj !== null && obj !== void 0 ? obj : null) !== null && _ref3 !== void 0 ? _ref3 : null;
assert.sameValue(x, obj, 'obj ?? null ?? null');
x = undefined;
x = (_ref4 = obj !== null && obj !== void 0 ? obj : undefined) !== null && _ref4 !== void 0 ? _ref4 : undefined;
assert.sameValue(x, obj, 'obj ?? null ?? null');
x = undefined;
x = (_ref5 = (_ref6 = null) !== null && _ref6 !== void 0 ? _ref6 : obj) !== null && _ref5 !== void 0 ? _ref5 : null;
assert.sameValue(x, obj, 'null ?? obj ?? null');
x = undefined;
x = (_ref7 = (_ref8 = null) !== null && _ref8 !== void 0 ? _ref8 : obj) !== null && _ref7 !== void 0 ? _ref7 : undefined;
assert.sameValue(x, obj, 'null ?? obj ?? undefined');
x = undefined;
x = (_ref9 = undefined !== null && undefined !== void 0 ? undefined : obj) !== null && _ref9 !== void 0 ? _ref9 : null;
assert.sameValue(x, obj, 'undefined ?? obj ?? null');
x = undefined;
x = (_ref10 = undefined !== null && undefined !== void 0 ? undefined : obj) !== null && _ref10 !== void 0 ? _ref10 : undefined;
assert.sameValue(x, obj, 'undefined ?? obj ?? undefined');