function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/accessor-names/computed-err-to-prop-key.case
// - src/accessor-names/error/cls-expr-static.template

/*---
description: Abrupt completion when coercing to property key value (Class expression, static method)
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

    [...]

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
    3. Return ? ToPropertyKey(propName).

    7.1.14 ToPropertyKey

    1. Let key be ? ToPrimitive(argument, hint String).

    7.1.1 ToPrimitive

    [...]
    7. Return ? OrdinaryToPrimitive(input, hint).

    7.1.1.1 OrdinaryToPrimitive

    5. For each name in methodNames in List order, do
       [...]
    6. Throw a TypeError exception.
---*/
var badKey = Object.create(null);
assert["throws"](TypeError, function () {
  0, /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, null, [{
      key: badKey,
      get: function get() {}
    }]);

    return _class;
  }();
}, '`get` accessor');
assert["throws"](TypeError, function () {
  0, /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, null, [{
      key: badKey,
      set: function set(_) {}
    }]);

    return _class2;
  }();
}, '`set` accessor');