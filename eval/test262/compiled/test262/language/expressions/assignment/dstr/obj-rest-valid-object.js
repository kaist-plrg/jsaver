var _vals, _vals2;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-valid-object.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Rest object contains just unextracted data (AssignmentExpression)
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
var rest, a, b;
var result;
var vals = {
  x: 1,
  y: 2,
  a: 5,
  b: 3
};
result = (_vals = vals, (_vals2 = _vals, a = _vals2.a, b = _vals2.b, _vals2), rest = _objectWithoutProperties(_vals, ["a", "b"]), _vals);
assert.sameValue(rest.a, undefined);
assert.sameValue(rest.b, undefined);
verifyProperty(rest, "x", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 1
});
verifyProperty(rest, "y", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 2
});
assert.sameValue(result, vals);