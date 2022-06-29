var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-yield-expression.case
// - src/computed-property-names/evaluation/object-literal.template

/*---
description: Computed property name from yield expression (ComputedPropertyName in ObjectLiteral)
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
  var o;
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _defineProperty;
          _context.t1 = {};
          _context.next = 4;
          return 9;

        case 4:
          _context.t2 = _context.sent;
          o = (0, _context.t0)(_context.t1, _context.t2, 9);
          _context.t3 = assert;
          _context.next = 9;
          return 9;

        case 9:
          _context.t4 = _context.sent;
          _context.t5 = o[_context.t4];

          _context.t3.sameValue.call(_context.t3, _context.t5, 9);

          _context.t6 = assert;
          _context.t7 = String;
          _context.next = 16;
          return 9;

        case 16:
          _context.t8 = _context.sent;
          _context.t9 = (0, _context.t7)(_context.t8);
          _context.t10 = o[_context.t9];

          _context.t6.sameValue.call(_context.t6, _context.t10, 9);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}