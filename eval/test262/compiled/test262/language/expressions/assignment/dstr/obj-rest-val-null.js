function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-val-null.case
// - src/dstr-assignment/error/assignment-expr.template

/*---
description: TypeError is thrown when rhs is null because of 7.1.13 ToObject ( argument ) used by CopyDataProperties (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var rest;
assert["throws"](TypeError, function () {
  var _ref, _ref2;

  0, (_ref = null, (_ref2 = _ref, _objectDestructuringEmpty(_ref2), _ref2), rest = _extends({}, _ref), _ref);
});