// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-gen.case
// - src/dstr-binding/default/try.template

/*---
description: SingleNameBinding assigns name to "anonymous" generator functions (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [generators, destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).

---*/
var ranCatch = false;

try {
  throw {};
} catch (_ref) {
  var _ref$gen = _ref.gen;
  var gen = _ref$gen === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }) : _ref$gen;
  var _ref$xGen = _ref.xGen;
  var xGen = _ref$xGen === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function x() {
    return regeneratorRuntime.wrap(function x$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, x);
  }) : _ref$xGen;
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');