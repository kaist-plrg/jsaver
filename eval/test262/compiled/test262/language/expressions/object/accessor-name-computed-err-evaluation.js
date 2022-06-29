function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

// This file was procedurally generated from the following sources:
// - src/accessor-names/computed-err-evaluation.case
// - src/accessor-names/error/obj.template

/*---
description: Abrupt completion when evaluating expression (Object initializer)
esid: sec-object-initializer-runtime-semantics-evaluation
flags: [generated]
info: |
    ObjectLiteral :
      { PropertyDefinitionList }
      { PropertyDefinitionList , }

    1. Let obj be ObjectCreate(%ObjectPrototype%).
    2. Let status be the result of performing PropertyDefinitionEvaluation of
       PropertyDefinitionList with arguments obj and true.

    12.2.6.7 Runtime Semantics: Evaluation

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
---*/
var thrower = function thrower() {
  throw new Test262Error();
};

assert["throws"](Test262Error, function () {
  var _thrower;

  var _ref = {};
  _thrower = thrower();
  var _mutatorMap = {};
  _mutatorMap[_thrower] = _mutatorMap[_thrower] || {};

  _mutatorMap[_thrower].get = function () {};

  _defineEnumerableProperties(_ref, _mutatorMap);

  _ref;
}, '`get` accessor');
assert["throws"](Test262Error, function () {
  var _thrower2;

  var _ref2 = {};
  _thrower2 = thrower();
  var _mutatorMap2 = {};
  _mutatorMap2[_thrower2] = _mutatorMap2[_thrower2] || {};

  _mutatorMap2[_thrower2].set = function (_) {};

  _defineEnumerableProperties(_ref2, _mutatorMap2);

  _ref2;
}, '`set` accessor');