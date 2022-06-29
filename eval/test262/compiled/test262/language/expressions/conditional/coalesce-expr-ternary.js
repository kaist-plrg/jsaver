var _ref, _ref2, _false, _, _2, _true, _true2, _ref3, _Symbol, _ref4;

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    ShortCircuitExpression in the Conditional Expression (? :)
esid: sec-conditional-operator
info: |
    ShortCircuitExpression :
        LogicalORExpression
        CoalesceExpression

    CoalesceExpression :
        CoalesceExpressionHead ?? BitwiseORExpression

    CoalesceExpressionHead :
        CoalesceExpression
        BitwiseORExpression

    ConditionalExpression :
        ShortCircuitExpression
        ShortCircuitExpression ? AssignmentExpression : AssignmentExpression
features: [coalesce-expression]
---*/
var x;
x = (undefined !== null && undefined !== void 0 ? undefined : true) ? 0 : 42;
assert.sameValue(x, 0, 'undefined ?? true ? 0 : 42');
x = undefined;
x = ((_ref = null) !== null && _ref !== void 0 ? _ref : true) ? 0 : 42;
assert.sameValue(x, 0, 'null ?? true ? 0 : 42');
x = undefined;
x = (undefined !== null && undefined !== void 0 ? undefined : false) ? 0 : 42;
assert.sameValue(x, 42, 'undefined ?? false ? 0 : 42');
x = undefined;
x = ((_ref2 = null) !== null && _ref2 !== void 0 ? _ref2 : false) ? 0 : 42;
assert.sameValue(x, 42, 'null ?? false ? 0 : 42');
x = undefined;
x = ((_false = false) !== null && _false !== void 0 ? _false : true) ? 0 : 42;
assert.sameValue(x, 42, 'false ?? true ? 0 : 42');
x = undefined;
x = ((_ = 0) !== null && _ !== void 0 ? _ : true) ? 0 : 42;
assert.sameValue(x, 42, '0 ?? true ? 0 : 42');
x = undefined;
x = ((_2 = 1) !== null && _2 !== void 0 ? _2 : false) ? 0 : 42;
assert.sameValue(x, 0, '1 ?? false ? 0 : 42');
x = undefined;
x = ((_true = true) !== null && _true !== void 0 ? _true : false) ? 0 : 42;
assert.sameValue(x, 0, 'true ?? false ? 0 : 42');
x = undefined;
x = ((_true2 = true) !== null && _true2 !== void 0 ? _true2 : true) ? 0 : 42;
assert.sameValue(x, 0, 'true ?? true ? 0 : 42');
x = undefined;
x = ((_ref3 = '') !== null && _ref3 !== void 0 ? _ref3 : true) ? 0 : 42;
assert.sameValue(x, 42, '"" ?? true ? 0 : 42');
x = undefined;
x = ((_Symbol = Symbol()) !== null && _Symbol !== void 0 ? _Symbol : false) ? 0 : 42;
assert.sameValue(x, 0, 'Symbol() ?? false ? 0 : 42');
x = undefined;
x = ((_ref4 = {}) !== null && _ref4 !== void 0 ? _ref4 : false) ? 0 : 42;
assert.sameValue(x, 0, 'object ?? false ? 0 : 42');