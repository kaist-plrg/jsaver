// This file was procedurally generated from the following sources:
// - src/identifier-names/new-escaped.case
// - src/identifier-names/default/covered-obj-prop-name.template

/*---
description: new is a valid identifier name, using escape (PropertyName in a CoverParenthesizedExpressionAndArrowParameterList)
esid: prod-PropertyDefinition
flags: [generated]
info: |
    ObjectLiteral :
      { PropertyDefinitionList }
      { PropertyDefinitionList , }

    PropertyDefinitionList:
      PropertyDefinition
      PropertyDefinitionList , PropertyDefinition

    PropertyDefinition:
      IdentifierReference
      PropertyName : AssignmentExpression
      MethodDefinition
      ... AssignmentExpression
      ...

    PropertyName:
      LiteralPropertyName
      ...

    LiteralPropertyName:
      IdentifierName
      ...

    Reserved Words

    A reserved word is an IdentifierName that cannot be used as an Identifier.
---*/
var obj = {
  "new": 42
};
assert.sameValue(obj['new'], 42, 'property exists');