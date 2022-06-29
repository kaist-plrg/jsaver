var _vals, _vals2;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-to-property.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: When DestructuringAssignmentTarget is an object property, its value should be binded as rest object. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var src = {};
var result;
var vals = {
  x: 1,
  y: 2
};
result = (_vals = vals, (_vals2 = _vals, _objectDestructuringEmpty(_vals2), _vals2), src.y = _extends({}, _vals), _vals);
assert.sameValue(src.y.x, 1);
assert.sameValue(src.y.y, 2);
verifyProperty(src, "y", {
  enumerable: true,
  writable: true,
  configurable: true
});
assert.sameValue(result, vals);