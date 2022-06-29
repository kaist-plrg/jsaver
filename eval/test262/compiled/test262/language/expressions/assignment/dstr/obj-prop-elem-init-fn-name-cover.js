var _vals, _vals$x, _vals$x2;

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-fn-name-cover.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Assignment of function `name` attribute (CoverParenthesizedExpression) (AssignmentExpression)
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

    AssignmentElement[Yield] : DestructuringAssignmentTarget Initializeropt
    [...] 7. If Initializer is present and v is undefined and
       IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of
       DestructuringAssignmentTarget are both true, then
       a. Let hasNameProperty be HasOwnProperty(rhsValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(rhsValue,
          GetReferencedName(lref)).

---*/
var xCover, cover;
var result;
var vals = {};
result = (_vals = vals, _vals$x = _vals.x, xCover = _vals$x === void 0 ? (0, function () {}) : _vals$x, _vals$x2 = _vals.x, cover = _vals$x2 === void 0 ? function () {} : _vals$x2, _vals);
assert.notSameValue(xCover.name, 'xCover');
verifyProperty(cover, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'cover'
});
assert.sameValue(result, vals);