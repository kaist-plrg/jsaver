function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-static-ctor-gen-meth-valid.case
// - src/class-elements/syntax/valid/cls-expr-elements-valid-syntax.template

/*---
description: Static Generator Methods can be named constructor (class expression)
esid: prod-ClassElement
features: [generators, class]
flags: [generated]
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is not "constructor" and HasDirectSuper of MethodDefinition is true.
        It is a Syntax Error if PropName of MethodDefinition is "constructor" and SpecialMethod of MethodDefinition is true.
    ClassElement : static MethodDefinition
        It is a Syntax Error if HasDirectSuper of MethodDefinition is true.
        It is a Syntax Error if PropName of MethodDefinition is "prototype".

---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  } // stacks with a valid constructor


  _createClass(C, null, [{
    key: "constructor",
    value: /*#__PURE__*/regeneratorRuntime.mark(function constructor() {
      return regeneratorRuntime.wrap(function constructor$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, constructor);
    })
  }]);

  return C;
}();

assert(C.hasOwnProperty('constructor'));
assert(C.prototype.hasOwnProperty('constructor'));
assert.notSameValue(C.prototype.constructor, C.constructor);