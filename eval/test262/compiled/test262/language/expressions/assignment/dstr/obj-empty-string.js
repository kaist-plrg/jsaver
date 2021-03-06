var _vals;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-empty-string.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: An ObjectAssignmentPattern without an AssignmentPropertyList requires an object-coercible value (string value) (AssignmentExpression)
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
var result;
var vals = '';
result = (_vals = vals, _objectDestructuringEmpty(_vals), _vals);
assert.sameValue(result, vals);