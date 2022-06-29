function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-generator-function-declaration.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from generator function (ComputedPropertyName in ObjectLiteral)
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
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var o = _defineProperty({}, g(), 1);

assert.sameValue(o[g()], 1);
assert.sameValue(o[String(g())], 1);