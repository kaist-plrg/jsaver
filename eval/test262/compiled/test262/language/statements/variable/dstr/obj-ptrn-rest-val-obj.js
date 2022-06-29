function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-val-obj.case
// - src/dstr-binding/default/var-stmt.template

/*---
description: Rest object contains just unextracted data (`var` statement)
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
var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 5,
  b: 3
},
    a = _x$y$a$b.a,
    b = _x$y$a$b.b,
    rest = _objectWithoutProperties(_x$y$a$b, ["a", "b"]);

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