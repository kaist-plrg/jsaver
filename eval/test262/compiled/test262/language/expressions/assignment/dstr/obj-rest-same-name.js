var _vals, _vals2;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-same-name.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Proper setting in the values for rest name equal to a property name. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var o = {
  x: 42,
  y: 39,
  z: 'cheeseburger'
};
var x, y, z;
var result;
var vals = o;
result = (_vals = vals, (_vals2 = _vals, x = _vals2.x, _vals2), z = _objectWithoutProperties(_vals, ["x"]), _vals);
assert.sameValue(x, 42);
assert.sameValue(y, undefined);
assert.sameValue(z.y, 39);
assert.sameValue(z.z, 'cheeseburger');
var keys = Object.getOwnPropertyNames(z);
assert.sameValue(keys.length, 2);
assert.sameValue(keys[0], 'y');
assert.sameValue(keys[1], 'z');
assert.sameValue(result, vals);