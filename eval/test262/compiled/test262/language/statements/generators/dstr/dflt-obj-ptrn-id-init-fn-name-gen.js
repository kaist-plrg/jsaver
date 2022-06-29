var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-gen.case
// - src/dstr-binding/default/gen-func-decl-dflt.template

/*---
description: SingleNameBinding assigns name to "anonymous" generator functions (generator function declaration (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [generators, destructuring-binding, default-parameters]
flags: [generated]
info: |
    GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

        [...]
        2. Let F be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
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
var callCount = 0;

function f() {
  var _ref,
      _ref$gen,
      gen,
      _ref$xGen,
      xGen,
      _args3 = arguments;

  return regeneratorRuntime.wrap(function f$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ref = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref$gen = _ref.gen, gen = _ref$gen === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }) : _ref$gen, _ref$xGen = _ref.xGen, xGen = _ref$xGen === void 0 ? /*#__PURE__*/regeneratorRuntime.mark(function x() {
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
          callCount = callCount + 1;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}

;
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');