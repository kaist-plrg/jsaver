// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-put-unresolvable-strict.case
// - src/dstr-assignment/error/assignment-expr.template

/*---
description: In strict mode, if the the assignment target is an unresolvable reference, a ReferenceError should be thrown. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated, onlyStrict]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
assert["throws"](ReferenceError, function () {
  var _ref;

  0, (_ref = {}, unresolvable = _ref.x, _ref);
});