var _x3, _x4, _x5, _x6, _x7, _x8;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-assignment-expression-coalesce.case
// - src/computed-property-names/evaluation/class-expression.template

/*---
description: Computed property name from assignment expression coalesce (ComputedPropertyName in ClassExpression)
esid: prod-ComputedPropertyName
features: [computed-property-names, logical-assignment-operators]
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
var x = null;

var C = /*#__PURE__*/function (_x, _x2) {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: _x,
    value: function value() {
      return 2;
    }
  }], [{
    key: _x2,
    value: function value() {
      return 2;
    }
  }]);

  return C;
}((_x3 = x) !== null && _x3 !== void 0 ? _x3 : x = 1, (_x4 = x) !== null && _x4 !== void 0 ? _x4 : x = 1);

var c = new C();
assert.sameValue(c[(_x5 = x) !== null && _x5 !== void 0 ? _x5 : x = 1](), 2);
assert.sameValue(C[(_x6 = x) !== null && _x6 !== void 0 ? _x6 : x = 1](), 2);
assert.sameValue(c[String((_x7 = x) !== null && _x7 !== void 0 ? _x7 : x = 1)](), 2);
assert.sameValue(C[String((_x8 = x) !== null && _x8 !== void 0 ? _x8 : x = 1)](), 2);
assert.sameValue(x, 1);