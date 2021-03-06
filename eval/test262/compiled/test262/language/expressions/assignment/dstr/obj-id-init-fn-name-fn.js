var _vals, _vals$xFn, _vals$fn;

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-fn-name-fn.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Assignment of function `name` attribute (FunctionExpression) (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    AssignmentProperty : IdentifierReference Initializeropt
    [...] 6. If Initializeropt is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v, P).

---*/
var xFn, fn;
var result;
var vals = {};
result = (_vals = vals, _vals$xFn = _vals.xFn, xFn = _vals$xFn === void 0 ? function x() {} : _vals$xFn, _vals$fn = _vals.fn, fn = _vals$fn === void 0 ? function () {} : _vals$fn, _vals);
assert.notSameValue(xFn.name, 'xFn');
verifyProperty(fn, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'fn'
});
assert.sameValue(result, vals);