var _vals;

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-identifier-resolution-lone.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Evaluation of DestructuringAssignmentTarget (lone element). (AssignmentExpression)
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
var x = null;
var result;
var vals = {
  a: 1
};
result = (_vals = vals, x = _vals.a, _vals);
assert.sameValue(x, 1);
assert.sameValue(result, vals);