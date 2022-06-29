function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

// This file was procedurally generated from the following sources:
// - src/accessor-names/computed-err-to-prop-key.case
// - src/accessor-names/error/obj.template

/*---
description: Abrupt completion when coercing to property key value (Object initializer)
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
  var _ref = {};
  var _mutatorMap = {};
  _mutatorMap[badKey] = _mutatorMap[badKey] || {};

  _mutatorMap[badKey].get = function () {};

  _defineEnumerableProperties(_ref, _mutatorMap);

  _ref;
}, '`get` accessor');
assert["throws"](TypeError, function () {
  var _ref2 = {};
  var _mutatorMap2 = {};
  _mutatorMap2[badKey] = _mutatorMap2[badKey] || {};

  _mutatorMap2[badKey].set = function (_) {};

  _defineEnumerableProperties(_ref2, _mutatorMap2);

  _ref2;
}, '`set` accessor');