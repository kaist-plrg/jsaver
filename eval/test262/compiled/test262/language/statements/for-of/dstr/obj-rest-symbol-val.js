function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-symbol-val.case
// - src/dstr-assignment/default/for-of.template

/*---
description: RestBindingInitialization creates a new object if lhs is a Symbol (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [Symbol, object-rest, destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var rest;
var counter = 0;

for (var _i = 0, _arr = [Symbol("foo")]; _i < _arr.length; _i++) {
  var _ref = _arr[_i];
  var _ref2 = _ref;

  _objectDestructuringEmpty(_ref2);

  rest = _extends({}, _ref2);
  _ref2;
  assert.notSameValue(rest, undefined);
  assert.notSameValue(rest, null);
  assert(rest instanceof Object);
  counter += 1;
}

assert.sameValue(counter, 1);