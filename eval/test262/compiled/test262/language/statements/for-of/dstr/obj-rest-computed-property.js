function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-computed-property.case
// - src/dstr-assignment/default/for-of.template

/*---
description: Destructuring field can be a computed property, i.e it can be defined only at runtime. Rest operantion needs to skip these properties as well. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
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
var a = "foo";
var b, rest;
var counter = 0;

for (var _i = 0, _arr = [{
  foo: 1,
  bar: 2,
  baz: 3
}]; _i < _arr.length; _i++) {
  var _ref = _arr[_i];
  var _ref2 = _ref;
  b = _ref2[a];
  rest = _objectWithoutProperties(_ref2, [a].map(_toPropertyKey));
  _ref2;
  assert.sameValue(b, 1);
  assert.sameValue(rest.bar, 2);
  assert.sameValue(rest.baz, 3);
  assert.sameValue(Object.getOwnPropertyDescriptor(rest, "foo"), undefined);
  verifyProperty(rest, "bar", {
    enumerable: true,
    writable: true,
    configurable: true
  });
  verifyProperty(rest, "baz", {
    enumerable: true,
    writable: true,
    configurable: true
  });
  counter += 1;
}

assert.sameValue(counter, 1);