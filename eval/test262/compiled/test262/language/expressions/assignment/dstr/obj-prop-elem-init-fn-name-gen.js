var _vals, _vals$x, _vals$x2;

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-fn-name-gen.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Assignment of function `name` attribute (GeneratorExpression) (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [generators, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    AssignmentElement[Yield] : DestructuringAssignmentTarget Initializeropt
    [...] 7. If Initializer is present and v is undefined and
       IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of
       DestructuringAssignmentTarget are both true, then
       a. Let hasNameProperty be HasOwnProperty(rhsValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(rhsValue,
          GetReferencedName(lref)).

---*/
var xGen, gen;
var result;
var vals = {};
result = (_vals = vals, _vals$x = _vals.x, xGen = _vals$x === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function x() {
  return regeneratorRuntime.wrap(function x$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, x);
}) : _vals$x, _vals$x2 = _vals.x, gen = _vals$x2 === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee);
}) : _vals$x2, _vals);
assert.notSameValue(xGen.name, 'xGen');
verifyProperty(gen, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'gen'
});
assert.sameValue(result, vals);