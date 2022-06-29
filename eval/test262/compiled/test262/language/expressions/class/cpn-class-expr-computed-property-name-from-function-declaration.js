function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-function-declaration.case
// - src/computed-property-names/evaluation/class-expression.template

/*---
description: Computed property name from function (ComputedPropertyName in ClassExpression)
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
function f() {}

var C = /*#__PURE__*/function (_f, _f2) {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: _f,
    value: function value() {
      return 1;
    }
  }], [{
    key: _f2,
    value: function value() {
      return 1;
    }
  }]);

  return C;
}(f(), f());

var c = new C();
assert.sameValue(c[f()](), 1);
assert.sameValue(C[f()](), 1);
assert.sameValue(c[String(f())](), 1);
assert.sameValue(C[String(f())](), 1);