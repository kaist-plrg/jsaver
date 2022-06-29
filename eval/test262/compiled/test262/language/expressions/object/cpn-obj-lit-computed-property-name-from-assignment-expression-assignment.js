function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-assignment-expression-assignment.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from assignment expression (ComputedPropertyName in ObjectLiteral)
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
var x = 0;

var o = _defineProperty({}, x = 1, 2);

assert.sameValue(o[x = 1], 2);
assert.sameValue(o[String(x = 1)], 2);
assert.sameValue(x, 1);