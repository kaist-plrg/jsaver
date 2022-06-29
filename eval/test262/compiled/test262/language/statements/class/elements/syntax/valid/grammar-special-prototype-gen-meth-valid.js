function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-special-prototype-gen-meth-valid.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax.template

/*---
description: Generator Methods can be named "prototype" (class declaration)
esid: prod-ClassElement
features: [generators, class]
flags: [generated]
includes: [propertyHelper.js]
info: |
    Runtime Semantics: ClassDefinitionEvaluation

    ClassTail : ClassHeritage_opt { ClassBody_opt }

    [...]
    6. Let proto be OrdinaryObjectCreate(protoParent).
    [...]
    14. Perform MakeConstructor(F, false, proto).
    [...]
    20. For each ClassElement m in order from methods, do
        a. If IsStatic of m is false, then
            i. Let status be PropertyDefinitionEvaluation of m with arguments proto and false.
    [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    With parameters object and enumerable.

    GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

    [...]
    10. Let desc be the PropertyDescriptor { [[Value]]: closure, [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
    11. Return ? DefinePropertyOrThrow(object, propKey, desc).

---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "prototype",
    value: /*#__PURE__*/regeneratorRuntime.mark(function prototype() {
      return regeneratorRuntime.wrap(function prototype$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, prototype);
    })
  }]);

  return C;
}();

assert(C.hasOwnProperty('prototype'));
assert(C.prototype.hasOwnProperty('prototype'));
assert.notSameValue(C.prototype.prototype, C.prototype);
verifyProperty(C.prototype, 'prototype', {
  writable: true,
  enumerable: false,
  configurable: true
});