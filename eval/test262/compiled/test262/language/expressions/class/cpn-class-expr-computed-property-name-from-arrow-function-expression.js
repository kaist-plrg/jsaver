var _this2 = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-arrow-function-expression.case
// - src/computed-property-names/evaluation/class-expression.template

/*---
description: Computed property name from arrow function (ComputedPropertyName in ClassExpression)
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
var C = /*#__PURE__*/function () {
  var _this = this;

  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: function key() {
      _newArrowCheck(this, _this);
    }.bind(this),
    value: function value() {
      return 1;
    }
  }], [{
    key: function key() {
      _newArrowCheck(this, _this);
    }.bind(this),
    value: function value() {
      return 1;
    }
  }]);

  return C;
}();

var c = new C();
assert.sameValue(c[function () {
  _newArrowCheck(this, _this2);
}.bind(this)](), 1);
assert.sameValue(C[function () {
  _newArrowCheck(this, _this2);
}.bind(this)](), 1);
assert.sameValue(c[String(function () {
  _newArrowCheck(this, _this2);
}.bind(this))](), 1);
assert.sameValue(C[String(function () {
  _newArrowCheck(this, _this2);
}.bind(this))](), 1);