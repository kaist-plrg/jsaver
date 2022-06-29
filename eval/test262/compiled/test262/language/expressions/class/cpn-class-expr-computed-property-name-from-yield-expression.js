var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-yield-expression.case
// - src/computed-property-names/evaluation/class-expression.template

/*---
description: Computed property name from yield expression (ComputedPropertyName in ClassExpression)
esid: prod-ComputedPropertyName
features: [computed-property-names]
flags: [generated]
info: |
    ClassExpression:
      classBindingIdentifier opt ClassTail

    ClassTail:
      ClassHeritage opt { ClassBody opt }

    ClassBody:
      ClassElementList

    ClassElementList:
      ClassElement

    ClassElement:
      MethodDefinition

    MethodDefinition:
      PropertyName ...
      get PropertyName ...
      set PropertyName ...

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/
function g() {
  var C, c;
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = function (_yield$, _yield$2) {
            function C() {
              _classCallCheck(this, C);
            }

            _createClass(C, [{
              key: _yield$,
              value: function value() {
                return 9;
              }
            }], [{
              key: _yield$2,
              value: function value() {
                return 9;
              }
            }]);

            return C;
          };

          _context.next = 3;
          return 9;

        case 3:
          _context.t1 = _context.sent;
          _context.next = 6;
          return 9;

        case 6:
          _context.t2 = _context.sent;
          C = (0, _context.t0)(_context.t1, _context.t2);
          c = new C();
          _context.t3 = assert;
          _context.next = 12;
          return 9;

        case 12:
          _context.t4 = _context.sent;
          _context.t5 = c[_context.t4]();

          _context.t3.sameValue.call(_context.t3, _context.t5, 9);

          _context.t6 = assert;
          _context.next = 18;
          return 9;

        case 18:
          _context.t7 = _context.sent;
          _context.t8 = C[_context.t7]();

          _context.t6.sameValue.call(_context.t6, _context.t8, 9);

          _context.t9 = assert;
          _context.t10 = String;
          _context.next = 25;
          return 9;

        case 25:
          _context.t11 = _context.sent;
          _context.t12 = (0, _context.t10)(_context.t11);
          _context.t13 = c[_context.t12]();

          _context.t9.sameValue.call(_context.t9, _context.t13, 9);

          _context.t14 = assert;
          _context.t15 = String;
          _context.next = 33;
          return 9;

        case 33:
          _context.t16 = _context.sent;
          _context.t17 = (0, _context.t15)(_context.t16);
          _context.t18 = C[_context.t17]();

          _context.t14.sameValue.call(_context.t14, _context.t18, 9);

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}