function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/accessor-names/computed-err-evaluation.case
// - src/accessor-names/error/cls-decl-inst.template

/*---
description: Abrupt completion when evaluating expression (Class declaration, instance method)
esid: sec-runtime-semantics-classdefinitionevaluation
features: [class]
flags: [generated]
info: |
    [...]
    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing PropertyDefinitionEvaluation
              for m with arguments proto and false.


    12.2.6.7 Runtime Semantics: Evaluation

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
---*/
var thrower = function thrower() {
  throw new Test262Error();
};

assert["throws"](Test262Error, function () {
  var C = /*#__PURE__*/function (_thrower) {
    function C() {
      _classCallCheck(this, C);
    }

    _createClass(C, [{
      key: _thrower,
      get: function get() {}
    }]);

    return C;
  }(thrower());
}, '`get` accessor');
assert["throws"](Test262Error, function () {
  var C = /*#__PURE__*/function (_thrower2) {
    function C() {
      _classCallCheck(this, C);
    }

    _createClass(C, [{
      key: _thrower2,
      set: function set(_) {}
    }]);

    return C;
  }(thrower());
}, '`set` accessor');