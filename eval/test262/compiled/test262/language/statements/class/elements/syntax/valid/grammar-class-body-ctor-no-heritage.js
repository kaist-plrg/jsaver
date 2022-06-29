function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-class-body-ctor-no-heritage.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax.template

/*---
description: A constructor is valid without a super call in the constructor and heritage (class declaration)
esid: prod-ClassElement
features: [class]
flags: [generated]
info: |
    ClassTail : ClassHeritageopt { ClassBody }

    It is a Syntax Error if ClassHeritage is not present and the following algorithm evaluates to true:
      1. Let constructor be ConstructorMethod of ClassBody.
      2. If constructor is empty, return false.
      3. Return HasDirectSuper of constructor.

---*/
var C = /*#__PURE__*/_createClass(function C() {
  _classCallCheck(this, C);
});