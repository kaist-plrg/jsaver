function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/spread/obj-with-overrides.case
// - src/spread/default/member-expr.template

/*---
description: Object Spread properties being overriden (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
features: [Symbol, object-spread]
flags: [generated]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/
var o = {
  a: 2,
  b: 3,
  c: 4,
  e: undefined,
  f: null,
  g: false
};
var callCount = 0;
new function (obj) {
  assert.sameValue(obj.a, 1);
  assert.sameValue(obj.b, 7);
  assert.sameValue(obj.c, 4);
  assert.sameValue(obj.d, 5);
  assert(obj.hasOwnProperty("e"));
  assert.sameValue(obj.f, null);
  assert.sameValue(obj.g, false);
  assert.sameValue(obj.h, -0);
  assert.sameValue(obj.i.toString(), "Symbol(foo)");
  assert(Object.is(obj.j, o));
  assert.sameValue(Object.keys(obj).length, 10);
  callCount += 1;
}(_objectSpread(_objectSpread({}, o), {}, {
  a: 1,
  b: 7,
  d: 5,
  h: -0,
  i: Symbol("foo"),
  j: o
}));
assert.sameValue(callCount, 1);