var _vals, _vals2;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-skip-non-enumerable.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Rest object doesn't contain non-enumerable properties (AssignmentExpression)
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
var rest;
var obj = {
  a: 3,
  b: 4
};
Object.defineProperty(obj, "x", {
  value: 4,
  enumerable: false
});
var result;
var vals = obj;
result = (_vals = vals, (_vals2 = _vals, _objectDestructuringEmpty(_vals2), _vals2), rest = _extends({}, _vals), _vals);
assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);
verifyProperty(rest, "a", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 3
});
verifyProperty(rest, "b", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 4
});
assert.sameValue(result, vals);