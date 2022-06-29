function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-exponetiation-expression.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from exponentiation expression (ComputedPropertyName in ObjectLiteral)
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
var o = _defineProperty({}, Math.pow(2, 2), 4);

assert.sameValue(o[Math.pow(2, 2)], 4);
assert.sameValue(o[String(Math.pow(2, 2))], 4);