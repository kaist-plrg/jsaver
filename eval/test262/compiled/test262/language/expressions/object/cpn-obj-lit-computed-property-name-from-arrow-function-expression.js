var _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-arrow-function-expression.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from arrow function (ComputedPropertyName in ObjectLiteral)
esid: prod-ComputedPropertyName
features: [computed-property-names]
flags: [generated]
info: |
    ObjectLiteral:
      { PropertyDefinitionList }

    PropertyDefinitionList:
      PropertyDefinition

    PropertyDefinition:
      PropertyName: AssignmentExpression

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/
var o = _defineProperty({}, function () {
  _newArrowCheck(this, _this);
}.bind(this), 1);

assert.sameValue(o[function () {
  _newArrowCheck(this, _this);
}.bind(this)], 1);
assert.sameValue(o[String(function () {
  _newArrowCheck(this, _this);
}.bind(this))], 1);