function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/spread/obj-override-immutable.case
// - src/spread/default/member-expr.template

/*---
description: Object Spread overriding immutable properties (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
features: [object-spread]
flags: [generated]
includes: [propertyHelper.js]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]
---*/
var o = {
  b: 2
};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
  writable: false,
  configurable: true
});
var callCount = 0;
new function (obj) {
  assert.sameValue(obj.a, 3);
  assert.sameValue(obj.b, 2);
  verifyProperty(obj, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
  });
  verifyProperty(obj, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 2
  });
  callCount += 1;
}(_objectSpread(_objectSpread({}, o), {}, {
  a: 3
}));
assert.sameValue(callCount, 1);