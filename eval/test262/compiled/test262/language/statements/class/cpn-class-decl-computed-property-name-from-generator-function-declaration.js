function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-generator-function-declaration.case
// - src/computed-property-names/evaluation/class-declaration.template

/*---
description: Computed property name from generator function (ComputedPropertyName in ClassDeclaration)
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

var C = /*#__PURE__*/function (_g, _g2) {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: _g,
    value: function value() {
      return 1;
    }
  }], [{
    key: _g2,
    value: function value() {
      return 1;
    }
  }]);

  return C;
}(g(), g());

;
var c = new C();
assert.sameValue(c[g()](), 1);
assert.sameValue(C[g()](), 1);
assert.sameValue(c[String(g())](), 1);
assert.sameValue(C[String(g())](), 1);