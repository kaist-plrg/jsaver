function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/accessor-names/computed-err-evaluation.case
// - src/accessor-names/error/cls-expr-static.template

/*---
description: Abrupt completion when evaluating expression (Class expression, static method)
esid: sec-runtime-semantics-classdefinitionevaluation
features: [class]
flags: [generated]
info: |
    [...]
    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           [...]
        b. Else,
           a. Let status be the result of performing PropertyDefinitionEvaluation
              for m with arguments F and false.


    12.2.6.7 Runtime Semantics: Evaluation

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
---*/
var thrower = function thrower() {
  throw new Test262Error();
};

assert["throws"](Test262Error, function () {
  0, /*#__PURE__*/function (_thrower) {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, null, [{
      key: _thrower,
      get: function get() {}
    }]);

    return _class;
  }(thrower());
}, '`get` accessor');
assert["throws"](Test262Error, function () {
  0, /*#__PURE__*/function (_thrower2) {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, null, [{
      key: _thrower2,
      set: function set(_) {}
    }]);

    return _class2;
  }(thrower());
}, '`set` accessor');