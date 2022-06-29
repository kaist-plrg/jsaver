var _excluded = ["x"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-same-name.case
// - src/dstr-assignment/default/for-of.template

/*---
description: Proper setting in the values for rest name equal to a property name. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding]
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
var o = {
  x: 42,
  y: 39,
  z: 'cheeseburger'
};
var x, y, z;
var counter = 0;

for (var _i = 0, _arr = [o]; _i < _arr.length; _i++) {
  var _ref = _arr[_i];
  var _ref2 = _ref;
  x = _ref2.x;
  z = _objectWithoutProperties(_ref2, _excluded);
  _ref2;
  assert.sameValue(x, 42);
  assert.sameValue(y, undefined);
  assert.sameValue(z.y, 39);
  assert.sameValue(z.z, 'cheeseburger');
  var keys = Object.getOwnPropertyNames(z);
  assert.sameValue(keys.length, 2);
  assert.sameValue(keys[0], 'y');
  assert.sameValue(keys[1], 'z');
  counter += 1;
}

assert.sameValue(counter, 1);