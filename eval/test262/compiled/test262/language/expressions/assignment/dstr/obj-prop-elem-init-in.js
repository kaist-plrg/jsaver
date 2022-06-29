var _vals, _vals$x;

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-in.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: The Initializer in an AssignmentElement may be an `in` expression. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var prop;
var result;
var vals = {};
result = (_vals = vals, _vals$x = _vals.x, prop = _vals$x === void 0 ? 'x' in {} : _vals$x, _vals);
assert.sameValue(prop, false);
assert.sameValue(result, vals);