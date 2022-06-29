var _vals, _vals2;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-computed-property.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Destructuring field can be a computed property, i.e it can be defined only at runtime. Rest operantion needs to skip these properties as well. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var a = "foo";
var b, rest;
var result;
var vals = {
  foo: 1,
  bar: 2,
  baz: 3
};
result = (_vals = vals, (_vals2 = _vals, b = _vals2[a], _vals2), rest = _objectWithoutProperties(_vals, [a].map(_toPropertyKey)), _vals);
assert.sameValue(b, 1);
assert.sameValue(rest.bar, 2);
assert.sameValue(rest.baz, 3);
assert.sameValue(Object.getOwnPropertyDescriptor(rest, "foo"), undefined);
verifyProperty(rest, "bar", {
  enumerable: true,
  writable: true,
  configurable: true
});
verifyProperty(rest, "baz", {
  enumerable: true,
  writable: true,
  configurable: true
});
assert.sameValue(result, vals);