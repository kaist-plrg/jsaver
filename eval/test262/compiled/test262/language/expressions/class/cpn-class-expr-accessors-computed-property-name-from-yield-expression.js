var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-yield-expression.case
// - src/computed-property-names/evaluation/class-expression-accessors.template

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
          _context.t0 = function (_yield$, _yield$2, _yield$3, _yield$4) {
            function C() {
              _classCallCheck(this, C);
            }

            _createClass(C, [{
              key: _yield$,
              get: function get() {
                return 9;
              }
            }, {
              key: _yield$2,
              set: function set(v) {
                return 9;
              }
            }], [{
              key: _yield$3,
              get: function get() {
                return 9;
              }
            }, {
              key: _yield$4,
              set: function set(v) {
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
          _context.next = 9;
          return 9;

        case 9:
          _context.t3 = _context.sent;
          _context.next = 12;
          return 9;

        case 12:
          _context.t4 = _context.sent;
          C = (0, _context.t0)(_context.t1, _context.t2, _context.t3, _context.t4);
          c = new C();
          _context.t5 = assert;
          _context.next = 18;
          return 9;

        case 18:
          _context.t6 = _context.sent;
          _context.t7 = c[_context.t6];

          _context.t5.sameValue.call(_context.t5, _context.t7, 9);

          _context.t8 = assert;
          _context.next = 24;
          return 9;

        case 24:
          _context.t9 = _context.sent;
          _context.t10 = c[_context.t9] = 9;

          _context.t8.sameValue.call(_context.t8, _context.t10, 9);

          _context.t11 = assert;
          _context.next = 30;
          return 9;

        case 30:
          _context.t12 = _context.sent;
          _context.t13 = C[_context.t12];

          _context.t11.sameValue.call(_context.t11, _context.t13, 9);

          _context.t14 = assert;
          _context.next = 36;
          return 9;

        case 36:
          _context.t15 = _context.sent;
          _context.t16 = C[_context.t15] = 9;

          _context.t14.sameValue.call(_context.t14, _context.t16, 9);

          _context.t17 = assert;
          _context.t18 = String;
          _context.next = 43;
          return 9;

        case 43:
          _context.t19 = _context.sent;
          _context.t20 = (0, _context.t18)(_context.t19);
          _context.t21 = c[_context.t20];

          _context.t17.sameValue.call(_context.t17, _context.t21, 9);

          _context.t22 = assert;
          _context.t23 = String;
          _context.next = 51;
          return 9;

        case 51:
          _context.t24 = _context.sent;
          _context.t25 = (0, _context.t23)(_context.t24);
          _context.t26 = c[_context.t25] = 9;

          _context.t22.sameValue.call(_context.t22, _context.t26, 9);

          _context.t27 = assert;
          _context.t28 = String;
          _context.next = 59;
          return 9;

        case 59:
          _context.t29 = _context.sent;
          _context.t30 = (0, _context.t28)(_context.t29);
          _context.t31 = C[_context.t30];

          _context.t27.sameValue.call(_context.t27, _context.t31, 9);

          _context.t32 = assert;
          _context.t33 = String;
          _context.next = 67;
          return 9;

        case 67:
          _context.t34 = _context.sent;
          _context.t35 = (0, _context.t33)(_context.t34);
          _context.t36 = C[_context.t35] = 9;

          _context.t32.sameValue.call(_context.t32, _context.t36, 9);

        case 71:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}