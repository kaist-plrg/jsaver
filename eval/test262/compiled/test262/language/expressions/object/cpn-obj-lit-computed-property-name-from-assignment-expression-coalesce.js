var _x, _x2, _x3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-assignment-expression-coalesce.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from assignment expression coalesce (ComputedPropertyName in ObjectLiteral)
esid: prod-ComputedPropertyName
features: [computed-property-names, logical-assignment-operators]
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
var x = null;

var o = _defineProperty({}, (_x = x) !== null && _x !== void 0 ? _x : x = 1, 2);

assert.sameValue(o[(_x2 = x) !== null && _x2 !== void 0 ? _x2 : x = 1], 2);
assert.sameValue(o[String((_x3 = x) !== null && _x3 !== void 0 ? _x3 : x = 1)], 2);
assert.sameValue(x, 1);